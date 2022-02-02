import { Character } from "../entities/Character";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Skill } from "../entities/Skill";

@Resolver(Skill)
export class CharacterResolver {
  // Fetches all characters
  @Query(() => [Character])
  async characters(): Promise<Character[]> {
    // const chars = await Character.find({});
    // chars.forEach((char) => {
    //   console.log(char.skills);
    // });

    // return chars;
    return await Character.find({});
  }

  // Fetches a single character
  @Query(() => Character)
  async character(@Arg("id") id: number): Promise<Character | undefined> {
    return await Character.findOne({ id });
  }
}
