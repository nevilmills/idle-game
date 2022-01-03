import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User_Skill } from "./User_Skill";

@ObjectType()
@Entity()
export class Skill extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ unique: true })
  name!: string;

  @OneToOne(() => User_Skill, (userSkill) => userSkill.skill)
  userSkill: User_Skill;
}
