import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Character_Skill } from "./Character_Skill";

@ObjectType()
@Entity()
export class Skill extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ unique: true })
  name!: string;

  @Field(() => [Character_Skill])
  @OneToMany(() => Character_Skill, (character_skill) => character_skill.skill)
  character_skills: Character_Skill[];
}
