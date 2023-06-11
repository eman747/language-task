"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTextArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextOrderByWithAggregationInput_1 = require("../../../inputs/TextOrderByWithAggregationInput");
const TextScalarWhereWithAggregatesInput_1 = require("../../../inputs/TextScalarWhereWithAggregatesInput");
const TextWhereInput_1 = require("../../../inputs/TextWhereInput");
const TextScalarFieldEnum_1 = require("../../../../enums/TextScalarFieldEnum");
let GroupByTextArgs = class GroupByTextArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextWhereInput_1.TextWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextWhereInput_1.TextWhereInput)
], GroupByTextArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TextOrderByWithAggregationInput_1.TextOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTextArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TextScalarFieldEnum_1.TextScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTextArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextScalarWhereWithAggregatesInput_1.TextScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextScalarWhereWithAggregatesInput_1.TextScalarWhereWithAggregatesInput)
], GroupByTextArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTextArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTextArgs.prototype, "skip", void 0);
GroupByTextArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTextArgs);
exports.GroupByTextArgs = GroupByTextArgs;
