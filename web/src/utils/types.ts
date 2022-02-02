import { Dispatch, SetStateAction } from "react";

export type ctxParam = {
  area: JSX.Element;
  setArea: Dispatch<SetStateAction<JSX.Element>>;
} | null;
