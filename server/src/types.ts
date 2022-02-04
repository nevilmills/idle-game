import { Request, Response } from "express";

// augmenting the module to add fields to the session object
declare module "express-session" {
  export interface SessionData {
    userId: number;
    charId: number;
  }
}

export type MyContext = {
  req: Request;
  res: Response;
};
