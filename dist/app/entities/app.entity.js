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
exports.App = void 0;
const class_validator_1 = require("class-validator");
const Entity_1 = require("./Entity");
const OpertaionType_1 = require("./OpertaionType");
class App extends Entity_1.Entity {
    constructor(fields) {
        super();
        if (fields) {
            Object.assign(this, fields);
        }
    }
    meniTester() {
        return 'meniTester';
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], App.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ groups: [OpertaionType_1.Opertaion.Create, OpertaionType_1.Opertaion.Update] }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], App.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], App.prototype, "description", void 0);
exports.App = App;
//# sourceMappingURL=app.entity.js.map