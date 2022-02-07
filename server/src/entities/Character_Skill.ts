import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Character } from "./Character";
import { Skill } from "./Skill";

@ObjectType()
@Entity()
export class Character_Skill extends BaseEntity {
  @Field()
  @PrimaryColumn()
  characterId!: number;

  @Field()
  @PrimaryColumn()
  skillId!: number;

  @Field()
  @Column({ type: "int", default: 1 })
  level: number;

  @Field()
  @Column({ type: "float", default: 0 })
  xp: number;

  @ManyToOne(() => Character, (character) => character.skills)
  character: Character;

  @ManyToOne(() => Skill, (skill) => skill.character_skills)
  skill: Skill;
}
