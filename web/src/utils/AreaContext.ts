import { createContext } from "react";
import { ctxParam } from "./types";
import { CharacterArea } from "../components/areas/CharacterArea";

export const AreaContext = createContext<ctxParam>(null);
