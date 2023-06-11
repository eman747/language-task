"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTextArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextUpdateManyMutationInput_1 = require("../../../inputs/TextUpdateManyMutationInput");
const TextWhereInput_1 = require("../../../inputs/TextWhereInput");
let UpdateManyTextArgs = class UpdateManyTextArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextUpdateManyMutationInput_1.TextUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TextUpdateManyMutationInput_1.TextUpdateManyMutationInput)
], UpdateManyTextArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextWhereInput_1.TextWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextWhereInput_1.TextWhereInput)
], UpdateManyTextArgs.prototype, "where", void 0);
UpdateManyTextArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTextArgs);
exports.UpdateManyTextArgs = UpdateManyTextArgs;
