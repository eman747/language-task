"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTextArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextOrderByWithRelationInput_1 = require("../../../inputs/TextOrderByWithRelationInput");
const TextWhereInput_1 = require("../../../inputs/TextWhereInput");
const TextWhereUniqueInput_1 = require("../../../inputs/TextWhereUniqueInput");
const TextScalarFieldEnum_1 = require("../../../../enums/TextScalarFieldEnum");
let FindFirstTextArgs = class FindFirstTextArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextWhereInput_1.TextWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextWhereInput_1.TextWhereInput)
], FindFirstTextArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TextOrderByWithRelationInput_1.TextOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTextArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextWhereUniqueInput_1.TextWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextWhereUniqueInput_1.TextWhereUniqueInput)
], FindFirstTextArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTextArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTextArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TextScalarFieldEnum_1.TextScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTextArgs.prototype, "distinct", void 0);
FindFirstTextArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTextArgs);
exports.FindFirstTextArgs = FindFirstTextArgs;
