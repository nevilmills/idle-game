import {
  Arg,
  Ctx,
  Field,
  Float,
  Int,
  Mutation,
  ObjectType,
  Resolver,
} from "type-graphql";
import { Character_Skill } from "../entities/Character_Skill";
import { MyContext } from "src/types";
import { expTable } from "../constants";

@ObjectType()
class GiveExpResponse {
  @Field(() => Character_Skill)
  charSkill?: Character_Skill;

  @Field(() => Boolean)
  leveled?: Boolean;
}

@Resolver(Character_Skill)
export class CharacterSkillResolver {
  @Mutation(() => GiveExpResponse)
  async giveExp(
    @Arg("skillId", () => Int) skillId: number,
    @Arg("value", () => Float) value: number,
    @Ctx() { req }: MyContext
  ): Promise<GiveExpResponse> {
    const charSkill = await Character_Skill.findOne({
      where: { characterId: req.session.charId, skillId },
    });

    if (!charSkill) {
      throw Error("character_skill not found. check if you are logged in.");
    }

    charSkill.xp = charSkill.xp + value;

    // check if character has leveled up
    if (charSkill.xp >= expTable[charSkill.level]) {
      charSkill.level = charSkill.level + 1;
      await charSkill.save();
      return { charSkill, leveled: true };
    }

    await charSkill.save();

    return { charSkill };
  }
}
