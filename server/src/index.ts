import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
import Redis from "ioredis";
import session from "express-session";
import connectRedis from "connect-redis";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import cors from "cors";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import path from "path";
import { COOKIE_NAME, __prod__ } from "./constants";
import { Character_Skill } from "./entities/Character_Skill";
import { Skill } from "./entities/Skill";
import { SkillResolver } from "./resolvers/skill";
import { Character } from "./entities/Character";
import { CharacterResolver } from "./resolvers/character";
import { CharacterSkillResolver } from "./resolvers/character_skill";

const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    database: "idle-game",
    username: "postgres",
    password: "postgres",
    logging: true,
    synchronize: true,
    // migrations: [path.join(__dirname, "./migrations/*")],
    entities: [User, Character_Skill, Skill, Character],
  });

  // await conn.runMigrations();
  //
  // const users = await User.find({});
  // users.forEach(async (user) => await user.remove());
  // const users = await Character.find({});
  // await Character.remove(users);
  // await User.delete({});
  // await Character.delete({});
  // await Character_Skill.delete({});

  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(
    cors({
      origin: "http://localhost:3000",
      // origin: "http://localhost:4000/graphql",
      credentials: true,
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 2, // 2 years
        httpOnly: true,
        sameSite: "lax", //csrf
        secure: false, // cookie only works in https
        // secure: __prod__, // cookie only works in https
      },
      saveUninitialized: false,
      secret: "qjkweasdasdaqwkjbdq",
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        UserResolver,
        SkillResolver,
        CharacterResolver,
        CharacterSkillResolver,
      ],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log("server started on localhost:4000");
  });
};

main().catch((err) => {
  console.error(err);
});
