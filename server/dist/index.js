"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const user_1 = require("./resolvers/user");
const ioredis_1 = __importDefault(require("ioredis"));
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const apollo_server_core_1 = require("apollo-server-core");
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const constants_1 = require("./constants");
const Character_Skill_1 = require("./entities/Character_Skill");
const Skill_1 = require("./entities/Skill");
const skill_1 = require("./resolvers/skill");
const Character_1 = require("./entities/Character");
const character_1 = require("./resolvers/character");
const main = async () => {
    const conn = await (0, typeorm_1.createConnection)({
        type: "postgres",
        database: "idle-game",
        username: "postgres",
        password: "postgres",
        logging: true,
        synchronize: true,
        entities: [User_1.User, Character_Skill_1.Character_Skill, Skill_1.Skill, Character_1.Character],
    });
    const app = (0, express_1.default)();
    const RedisStore = (0, connect_redis_1.default)(express_session_1.default);
    const redis = new ioredis_1.default();
    app.use((0, cors_1.default)({
        origin: "http://localhost:3000",
        credentials: true,
    }));
    app.use((0, express_session_1.default)({
        name: constants_1.COOKIE_NAME,
        store: new RedisStore({ client: redis, disableTouch: true }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365 * 2,
            httpOnly: true,
            sameSite: "lax",
            secure: false,
        },
        saveUninitialized: false,
        secret: "qjkweasdasdaqwkjbdq",
        resave: false,
    }));
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [user_1.UserResolver, skill_1.SkillResolver, character_1.CharacterResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({
            req,
            res,
            redis,
        }),
        plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageGraphQLPlayground)()],
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
//# sourceMappingURL=index.js.map