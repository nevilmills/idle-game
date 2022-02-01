import { Field, Int, ObjectType } from "type-graphql";
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
export class Character extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Int)
  @Column({ unique: true })
  userId!: number;

  @Field()
  @Column()
  name!: string;

  @Field(() => Int)
  @Column({ type: "int", default: 0 })
  coins!: number;

  @OneToMany(
    () => Character_Skill,
    (character_skill) => character_skill.characterId
  )
  skills: Character_Skill[];
}
