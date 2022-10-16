"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const class_validator_1 = require("class-validator");
const lodash_1 = require("lodash");
class Entity {
    constructor() {
    }
    async validate(group) {
        const validationOptions = { groups: [] };
        if (group) {
            validationOptions.groups.push(group);
        }
        return await (0, class_validator_1.validate)(this, validationOptions).then((errors) => {
            if (errors.length > 0) {
                const msg = 'validation failed. errors: ' + errors;
                console.error(msg);
            }
        });
    }
    toJSON() {
        return JSON.stringify(this);
    }
    clone() {
        return lodash_1.default.cloneDeep(this);
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map