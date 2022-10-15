import { Exclude } from "class-transformer";
import { validate } from "class-validator";
import _ from "lodash";
import { Opertaion } from "./OpertaionType";


export abstract class Entity {

    constructor() {
        // this.orginalObject = obj;
        // return new Proxy(this, {
        //     set: function (target, key, value) {
        //         console.log(`${String(key)} set to ${value}`);
        //         target[key] = value;
        //         return true;
        //     }
        // });

    }
    // isInternal = false;

    async validate(group?: Opertaion) {
        const validationOptions = { groups: [] };
        if (group) {
            validationOptions.groups.push(group);
        }
        return await validate(this, validationOptions).then((errors: any) => {
            // errors is an array of validation errors
            if (errors.length > 0) {
                const msg = 'validation failed. errors: ' + errors;
                console.error(msg);
                //throw new Error(msg);
            }
        });

    }

    toJSON() {
        return JSON.stringify(this);
    }


    clone() {
        return _.cloneDeep(this);
    }

    // private calcChanges(oldObj, newObj) {
    //     const changes = {};
    //     for (const key in oldObj) {
    //         if (oldObj[key] !== newObj[key]) {
    //             changes[key] = newObj[key];
    //         }
    //     }
    //     return changes;
    // }

    // save() {
    //     const changes = this.calcChanges(this.orginalObject, this);

    // }

    // objectChangesToMongooseQuery(changes) {
    //     const fieldTypeToMongooseMethod = {
    //         [typeof String]: '$set',
    //         [typeof Number]: '$set',
    //         [typeof Boolean]: '$set',
    //         [typeof Date]: '$set',
    //         [typeof Array]: '$push',
    //         [typeof Object]: '$push'
    //     }

    //     const prpareQuery = {};
    //     for (const key in changes) {

    //         prpareQuery[key] = changes[key];
    //     }
    //     const queryStage1 = _.groupBy(prpareQuery, {});

    //     return prpareQuery;
    // }
}


