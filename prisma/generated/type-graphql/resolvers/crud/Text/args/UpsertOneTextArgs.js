"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTextArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextCreateInput_1 = require("../../../inputs/TextCreateInput");
const TextUpdateInput_1 = require("../../../inputs/TextUpdateInput");
const TextWhereUniqueInput_1 = require("../../../inputs/TextWhereUniqueInput");
let UpsertOneTextArgs = class UpsertOneTextArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextWhereUniqueInput_1.TextWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TextWhereUniqueInput_1.TextWhereUniqueInput)
], UpsertOneTextArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextCreateInput_1.TextCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TextCreateInput_1.TextCreateInput)
], UpsertOneTextArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextUpdateInput_1.TextUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TextUpdateInput_1.TextUpdateInput)
], UpsertOneTextArgs.prototype, "update", void 0);
UpsertOneTextArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTextArgs);
exports.UpsertOneTextArgs = UpsertOneTextArgs;
