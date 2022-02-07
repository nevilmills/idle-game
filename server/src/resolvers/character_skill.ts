import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Character_Skill } from "../entities/Character_Skill";
import { MyContext } from "src/types";

@Resolver(Character_Skill)
export class CharacterSkillResolver {
  @Mutation(() => Character_Skill)
  async giveExp(
    @Arg("skillId", () => Int) skillId: number,
    @Arg("value", () => Int) value: number,
    @Ctx() { req }: MyContext
  ): Promise<Character_Skill> {
    const charSkill = await Character_Skill.findOne({
      where: { characterId: req.session.charId, skillId },
    });

    if (!charSkill) {
      throw Error("character_skill not found. check if you are logged in.");
    }

    charSkill.xp = charSkill.xp + value;
    charSkill.save();

    return charSkill;
  }
}
