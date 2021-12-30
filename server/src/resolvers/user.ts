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
import { getConnection } from "typeorm";
import { MyContext } from "src/types";
import { UsernamePasswordInput } from "./UsernamePasswordInput";

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
  async user(@Arg("username") username: string) {
    const user = await User.findOne({ username: username });

    return user;
  }

  @Query(() => [User])
  async users() {
    const users = await User.find();

    return users;
  }

  @Mutation(() => User)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { req }: MyContext
  ): Promise<User> {
    //create a new user and insert into the database

    const hashedPassword = await argon2.hash(options.password);
    let user;

    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({ username: options.username, password: hashedPassword })
        .returning("*")
        .execute();

      user = result.raw[0];
      console.log("user variable: ", user);
    } catch (err) {
      if (err.code === "23505") {
        //duplicate username error
        throw new Error("username already taken");
      }
    }

    return user;
  }

  @Mutation(() => User)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() { req }: MyContext
  ): Promise<User> {
    const user = await User.findOne({ username: username });

    if (!user) {
      throw new Error("Incorrect username.");
    }

    const valid = await argon2.verify(user.password, password);

    if (!valid) {
      throw new Error("Incorrect password.");
    }

    req.session.userId = user.id;

    return user;
  }
}
