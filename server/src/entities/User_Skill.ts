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
import { Skill } from "./Skill";
import { User } from "./User";

@ObjectType()
@Entity()
export class User_Skill extends BaseEntity {
  @Field()
  @PrimaryColumn()
  userId!: number;

  @Field()
  @PrimaryColumn()
  skillId: number;

  @Field()
  @Column()
  level: number;

  @Field()
  @Column()
  xp: number;

  @ManyToOne(() => User_Skill, (user_skill) => user_skill.userId)
  user: User;

  @OneToOne(() => Skill)
  @JoinColumn()
  skill: Skill;
}
