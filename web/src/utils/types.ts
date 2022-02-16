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
};

export type queryArgs = Omit<
  UseQueryArgs<Exact<{ name: string }>, any>,
  "query"
>;
