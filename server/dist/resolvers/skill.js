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
exports.SkillResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Skill_1 = require("../entities/Skill");
let SkillResolver = class SkillResolver {
    async addSkill(name) {
        try {
            Skill_1.Skill.create({ name }).save();
            return true;
        }
        catch (err) {
            throw Error(err);
        }
    }
    async getSkillId(name) {
        let skill;
        try {
            skill = await Skill_1.Skill.findOne({ name });
        }
        catch (err) {
            throw Error(`Error fetching skill: ${err}`);
        }
        return skill;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "addSkill", null);
__decorate([
    (0, type_graphql_1.Query)(() => Skill_1.Skill),
    __param(0, (0, type_graphql_1.Arg)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SkillResolver.prototype, "getSkillId", null);
SkillResolver = __decorate([
    (0, type_graphql_1.Resolver)(Skill_1.Skill)
], SkillResolver);
exports.SkillResolver = SkillResolver;
//# sourceMappingURL=skill.js.map