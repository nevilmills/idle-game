import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Character_Skill } from "src/entities/Character_Skill";
import { MyContext } from "src/types";
import { getConnection } from "typeorm";

@Resolver(Character_Skill)
export class CharacterSkillResolver {
  @Mutation(() => Character_Skill)
  async giveExp(
    @Arg("skillId") skillId: number,
    @Arg("value") value: number,
    @Ctx() { req }: MyContext
  ): Promise<Character_Skill> {
    // find Character_Skill to update

    const charSkill = (
      await getConnection().query(
        `
        select c.*
        from character_skill c
        where c."characterId" = $1 and c."skillId" = $2;
        `,
        [req.session.charId, skillId]
      )
    )[0];

    console.log("character skill: ", charSkill);

    return charSkill;
  }
}
