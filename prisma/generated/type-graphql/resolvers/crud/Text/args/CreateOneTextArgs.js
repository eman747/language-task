"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTextArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextCreateInput_1 = require("../../../inputs/TextCreateInput");
let CreateOneTextArgs = class CreateOneTextArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextCreateInput_1.TextCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TextCreateInput_1.TextCreateInput)
], CreateOneTextArgs.prototype, "data", void 0);
CreateOneTextArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTextArgs);
exports.CreateOneTextArgs = CreateOneTextArgs;
