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
exports.CharacterResolver = void 0;
const Character_1 = require("../entities/Character");
const type_graphql_1 = require("type-graphql");
const Skill_1 = require("../entities/Skill");
let CharacterResolver = class CharacterResolver {
    async characters() {
        return await Character_1.Character.find({});
    }
    async character(id) {
        return await Character_1.Character.findOne({ id });
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Character_1.Character]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CharacterResolver.prototype, "characters", null);
__decorate([
    (0, type_graphql_1.Query)(() => Character_1.Character),
    __param(0, (0, type_graphql_1.Arg)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CharacterResolver.prototype, "character", null);
CharacterResolver = __decorate([
    (0, type_graphql_1.Resolver)(Skill_1.Skill)
], CharacterResolver);
exports.CharacterResolver = CharacterResolver;
//# sourceMappingURL=character.js.map