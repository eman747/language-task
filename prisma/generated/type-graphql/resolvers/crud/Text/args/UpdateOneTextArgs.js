"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTextArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextUpdateInput_1 = require("../../../inputs/TextUpdateInput");
const TextWhereUniqueInput_1 = require("../../../inputs/TextWhereUniqueInput");
let UpdateOneTextArgs = class UpdateOneTextArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextUpdateInput_1.TextUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TextUpdateInput_1.TextUpdateInput)
], UpdateOneTextArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextWhereUniqueInput_1.TextWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TextWhereUniqueInput_1.TextWhereUniqueInput)
], UpdateOneTextArgs.prototype, "where", void 0);
UpdateOneTextArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTextArgs);
exports.UpdateOneTextArgs = UpdateOneTextArgs;
