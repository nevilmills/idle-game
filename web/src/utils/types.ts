import { Dispatch, SetStateAction } from "react";
import { UseQueryArgs } from "urql";
import { Exact } from "../generated/graphql";

export type ctxParam = {
  menu: JSX.Element;
  setMenu: Dispatch<SetStateAction<JSX.Element>>;
} | null;

export type SkillCtx = {
  trainingStatus: TrainingStatus;
  setTrainingStatus: React.Dispatch<React.SetStateAction<TrainingStatus>>;
};

export type queryArgs = Omit<
  UseQueryArgs<Exact<{ name: string }>, any>,
  "query"
>;

export type CharSkillData = {
  __typename?: "Character_Skill" | undefined;
  xp: number;
  level: number;
};

export type MenuOption = "woodcutting" | "mining" | "fishing";

export type TrainingStatus = {
  isTraining: boolean;
  trainerName: string | undefined;
  intervalId: NodeJS.Timer | undefined;
};
