import { User } from "../entities/User";
// import { MyContext } from "src/types";
import {
  Arg,
  Ctx,
  Field,
  FieldResolver,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  Root,
} from "type-graphql";
import argon2 from "argon2";
// import { UsernamePasswordInput } from "./UsernamePasswordInput";
import { getConnection, SaveOptions } from "typeorm";
import { MyContext } from "../types";
import { UsernamePasswordInput } from "./UsernamePasswordInput";
import { Character } from "../entities/Character";
import { Character_Skill } from "../entities/Character_Skill";
import { Skill } from "../entities/Skill";

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver(User)
export class UserResolver {
  @Query(() => User)
  async me(@Ctx() { req }: MyContext) {
    if (!req.session.userId) {
      // user not currently signed in
      return null;
    }

    const user = await User.findOne({ id: req.session.userId });

    return user;
  }

  @Query(() => User)
  async user(@Arg("username") username: string) {
    const user = await User.findOne({ username: username });

    return user;
  }

  @Query(() => [User])
  async users() {
    const users = await User.find();

    return users;
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { req }: MyContext): Promise<Boolean> {
    req.session.userId = undefined;

    return true;
  }

  @Mutation(() => User)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<User> {
    //create a new user and insert into the database

    const hashedPassword = await argon2.hash(options.password);
    let user: User;
    let character: Character;

    // initialize user's character and skills
    try {
      character = new Character();
      await character.save();

      // create a charSkill for each skill in the skills table
      const skills = await Skill.find({});

      const promises = skills.map(async (skill) => {
        const charSkill = new Character_Skill();
        charSkill.skillId = skill.id;
        charSkill.characterId = character.id;
        await charSkill.save();
        return charSkill;
      });

      const charSkills = await Promise.all(promises);

      console.log("charskills: ", charSkills);

      // create the user
      user = new User();
      user.username = options.username;
      user.password = hashedPassword;
      user.character = character;
      await user.save();
    } catch (err) {
      if (err.code === "23505") {
        //duplicate username error
        throw new Error("username already taken");
      } else {
        throw new Error(`error while initializing character: ${err}`);
      }
    }

    req.session.userId = user.id;
    req.session.charId = character.id;

    return user;
  }

  @Mutation(() => User)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<User> {
    const user = (
      await getConnection().query(
        `
    select u.*
    from "user" u
    where u."username" = '${username}';
    `
      )
    )[0];

    if (!user) {
      throw new Error("Incorrect username.");
    }

    const valid = await argon2.verify(user.password, password);

    if (!valid) {
      throw new Error("Incorrect password.");
    }

    req.session.userId = user.id;
    req.session.charId = user.characterId;

    console.log("character: ", user);

    return user;
  }
}
