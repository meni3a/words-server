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
Object.defineProperty(exports, "__esModule", { value: true });
exports.catSchema = exports.Cat = void 0;
const class_validator_1 = require("class-validator");
const mongoose_1 = require("@nestjs/mongoose");
const OpertaionType_1 = require("../../app/entities/OpertaionType");
const Entity_1 = require("../../app/entities/Entity");
let Cat = class Cat extends Entity_1.Entity {
};
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Cat.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDefined)({ groups: [OpertaionType_1.Opertaion.Create] }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cat.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsDefined)({ groups: [OpertaionType_1.Opertaion.Create] }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Cat.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsDefined)({ groups: [OpertaionType_1.Opertaion.Create] }),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Cat.prototype, "breed", void 0);
Cat = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false })
], Cat);
exports.Cat = Cat;
exports.catSchema = mongoose_1.SchemaFactory.createForClass(Cat);
//# sourceMappingURL=cat.entity.js.map