import { Dispatch, SetStateAction } from "react";
import { UseQueryArgs } from "urql";
import { Exact } from "../generated/graphql";

export type ctxParam = {
  area: JSX.Element;
  setArea: Dispatch<SetStateAction<JSX.Element>>;
} | null;

export type skillCtxParam = {
  isTraining: boolean;
  setIsTraining: React.Dispatch<React.SetStateAction<boolean>>;
  id: NodeJS.Timer | undefined;
  setId: React.Dispatch<React.SetStateAction<NodeJS.Timer | undefined>>;
  trainerKey: string | undefined;
  setTrainerKey: React.Dispatch<React.SetStateAction<string | undefined>>;
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
