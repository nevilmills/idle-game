import { createContext } from "react";
import { skillCtxParam } from "../types";

export const SkillContext = createContext<skillCtxParam>({} as skillCtxParam);
