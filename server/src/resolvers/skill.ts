import { Arg, Mutation, Resolver } from "type-graphql";
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
}
