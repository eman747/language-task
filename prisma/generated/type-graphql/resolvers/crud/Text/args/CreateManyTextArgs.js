"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyTextArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextCreateManyInput_1 = require("../../../inputs/TextCreateManyInput");
let CreateManyTextArgs = class CreateManyTextArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TextCreateManyInput_1.TextCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyTextArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyTextArgs.prototype, "skipDuplicates", void 0);
CreateManyTextArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyTextArgs);
exports.CreateManyTextArgs = CreateManyTextArgs;
