import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
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
  @Column({ default: 1 })
  level: number;

  @Field()
  @Column({ default: 0 })
  xp: number;

  @ManyToOne(() => Character, (character) => character.skills)
  character: Character;

  @ManyToOne(() => Skill, (skill) => skill.character_skills)
  skill: Skill;
}

// @ObjectType()
// @Entity()
// export class Character_Skill extends BaseEntity {
//   @Field()
//   @PrimaryGeneratedColumn()
//   id!: number;

//   @Field()
//   @Column({ default: 1 })
//   level: number;

//   @Field()
//   @Column({ default: 0 })
//   xp: number;

//   @Field(() => Character)
//   @ManyToOne(() => Character, (character) => character.skills)
//   character: Character;

//   @Field(() => Skill)
//   @ManyToOne(() => Skill, (skill) => skill.character_skills)
//   skill: Skill;
// }
