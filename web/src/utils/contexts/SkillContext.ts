import { createContext } from "react";
import { SkillCtx } from "../types";

export const SkillContext = createContext<SkillCtx>({} as SkillCtx);
