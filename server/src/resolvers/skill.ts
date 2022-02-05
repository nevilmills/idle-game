import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Skill } from "../entities/Skill";

@Resolver(Skill)
export class SkillResolver {
  @Mutation(() => Boolean)
  async addSkill(@Arg("name") name: string): Promise<Boolean> {
    try {
      Skill.create({ name }).save();
      return true;
    } catch (err) {
      throw Error(err);
    }
  }

  @Query(() => Skill)
  async getSkillId(@Arg("name") name: string) {
    let skill;

    try {
      skill = await Skill.findOne({ name });
    } catch (err) {
      throw Error(`Error fetching skill: ${err}`);
    }

    return skill;
  }
}
