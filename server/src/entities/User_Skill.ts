import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import { Character } from "./Character";
import { Skill } from "./Skill";

@ObjectType()
@Entity()
export class User_Skill extends BaseEntity {
  @Field()
  @PrimaryColumn()
  characterId!: number;

  @Field()
  @PrimaryColumn()
  skillId: number;

  @Field()
  @Column()
  level: number;

  @Field()
  @Column()
  xp: number;

  @ManyToOne(() => Character, (character) => character.skills)
  character: Character;

  @OneToOne(() => Skill)
  @JoinColumn()
  skill: Skill;
}
