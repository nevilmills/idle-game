import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Character_Skill } from "./Character_Skill";

@ObjectType()
@Entity()
export class Character extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Int)
  @Column({ type: "int", default: 0 })
  coins!: number;

  @OneToMany(() => Character_Skill, (charSkill) => charSkill.character)
  skills: Character_Skill[];
}
