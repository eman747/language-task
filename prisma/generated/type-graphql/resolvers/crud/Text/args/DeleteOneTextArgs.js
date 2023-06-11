"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTextArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextWhereUniqueInput_1 = require("../../../inputs/TextWhereUniqueInput");
let DeleteOneTextArgs = class DeleteOneTextArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextWhereUniqueInput_1.TextWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TextWhereUniqueInput_1.TextWhereUniqueInput)
], DeleteOneTextArgs.prototype, "where", void 0);
DeleteOneTextArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTextArgs);
exports.DeleteOneTextArgs = DeleteOneTextArgs;
