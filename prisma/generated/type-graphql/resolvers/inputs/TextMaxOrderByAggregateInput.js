"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TextMaxOrderByAggregateInput = class TextMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextMaxOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextMaxOrderByAggregateInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextMaxOrderByAggregateInput.prototype, "translatedText", void 0);
TextMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TextMaxOrderByAggregateInput", {
        isAbstract: true
    })
], TextMaxOrderByAggregateInput);
exports.TextMaxOrderByAggregateInput = TextMaxOrderByAggregateInput;
