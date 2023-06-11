"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextAvgOrderByAggregateInput_1 = require("../inputs/TextAvgOrderByAggregateInput");
const TextCountOrderByAggregateInput_1 = require("../inputs/TextCountOrderByAggregateInput");
const TextMaxOrderByAggregateInput_1 = require("../inputs/TextMaxOrderByAggregateInput");
const TextMinOrderByAggregateInput_1 = require("../inputs/TextMinOrderByAggregateInput");
const TextSumOrderByAggregateInput_1 = require("../inputs/TextSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TextOrderByWithAggregationInput = class TextOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextOrderByWithAggregationInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextOrderByWithAggregationInput.prototype, "translatedText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextCountOrderByAggregateInput_1.TextCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextCountOrderByAggregateInput_1.TextCountOrderByAggregateInput)
], TextOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextAvgOrderByAggregateInput_1.TextAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextAvgOrderByAggregateInput_1.TextAvgOrderByAggregateInput)
], TextOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextMaxOrderByAggregateInput_1.TextMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextMaxOrderByAggregateInput_1.TextMaxOrderByAggregateInput)
], TextOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextMinOrderByAggregateInput_1.TextMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextMinOrderByAggregateInput_1.TextMinOrderByAggregateInput)
], TextOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextSumOrderByAggregateInput_1.TextSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextSumOrderByAggregateInput_1.TextSumOrderByAggregateInput)
], TextOrderByWithAggregationInput.prototype, "_sum", void 0);
TextOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TextOrderByWithAggregationInput", {
        isAbstract: true
    })
], TextOrderByWithAggregationInput);
exports.TextOrderByWithAggregationInput = TextOrderByWithAggregationInput;
