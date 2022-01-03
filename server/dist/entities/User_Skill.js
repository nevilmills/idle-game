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
var User_Skill_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_Skill = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Skill_1 = require("./Skill");
const User_1 = require("./User");
let User_Skill = User_Skill_1 = class User_Skill extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], User_Skill.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], User_Skill.prototype, "skillId", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User_Skill.prototype, "level", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User_Skill.prototype, "xp", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_Skill_1, (user_skill) => user_skill.userId),
    __metadata("design:type", User_1.User)
], User_Skill.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Skill_1.Skill, (skill) => skill.userSkill),
    __metadata("design:type", Skill_1.Skill)
], User_Skill.prototype, "skill", void 0);
User_Skill = User_Skill_1 = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], User_Skill);
exports.User_Skill = User_Skill;
//# sourceMappingURL=User_Skill.js.map