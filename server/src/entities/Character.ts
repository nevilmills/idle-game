import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User_Skill } from "./User_Skill";

@ObjectType()
@Entity()
export class Character extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Int)
  @Column({ unique: true })
  userId!: number;

  @Field(() => Int)
  @Column({ type: "int", default: 0 })
  coins!: number;

  @OneToMany(() => User_Skill, (user_skill) => user_skill.characterId)
  skills: User_Skill[];
}
