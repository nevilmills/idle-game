"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSkillResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Character_Skill_1 = require("src/entities/Character_Skill");
const typeorm_1 = require("typeorm");
let CharacterSkillResolver = class CharacterSkillResolver {
    async giveExp(skillId, value, { req }) {
        const charSkill = (await (0, typeorm_1.getConnection)().query(`
        select c.*
        from character_skill c
        where c."characterId" = $1 and c."skillId" = $2;
        `, [req.session.charId, skillId]))[0];
        console.log("character skill: ", charSkill);
        return charSkill;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Character_Skill_1.Character_Skill),
    __param(0, (0, type_graphql_1.Arg)("skillId")),
    __param(1, (0, type_graphql_1.Arg)("value")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], CharacterSkillResolver.prototype, "giveExp", null);
CharacterSkillResolver = __decorate([
    (0, type_graphql_1.Resolver)(Character_Skill_1.Character_Skill)
], CharacterSkillResolver);
exports.CharacterSkillResolver = CharacterSkillResolver;
//# sourceMappingURL=character_skill.js.map