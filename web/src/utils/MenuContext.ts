import { createContext } from "react";
import { ctxParam } from "./types";
import { CharacterArea } from "../components/menus/CharacterMenu";

export const MenuContext = createContext<ctxParam>(null);
