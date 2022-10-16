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
exports.userSchema = exports.User = void 0;
const class_validator_1 = require("class-validator");
const Entity_1 = require("../app/entities/Entity");
const OpertaionType_1 = require("../app/entities/OpertaionType");
const mongoose_1 = require("@nestjs/mongoose");
let User = class User extends Entity_1.Entity {
    constructor(fields) {
        super();
        if (fields) {
            Object.assign(this, fields);
        }
    }
};
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, mongoose_1.Prop)(),
    (0, class_validator_1.IsDefined)({ groups: [OpertaionType_1.Opertaion.Update, OpertaionType_1.Opertaion.Delete] }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)({ groups: [OpertaionType_1.Opertaion.Create] }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)({ groups: [OpertaionType_1.Opertaion.Create] }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsDefined)({ groups: [OpertaionType_1.Opertaion.Create] }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsDefined)({ groups: [OpertaionType_1.Opertaion.Create] }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMobilePhone)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false }),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
exports.userSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.entity.js.map