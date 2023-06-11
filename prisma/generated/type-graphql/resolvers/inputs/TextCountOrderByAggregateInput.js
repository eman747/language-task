"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TextCountOrderByAggregateInput = class TextCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextCountOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextCountOrderByAggregateInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextCountOrderByAggregateInput.prototype, "translatedText", void 0);
TextCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TextCountOrderByAggregateInput", {
        isAbstract: true
    })
], TextCountOrderByAggregateInput);
exports.TextCountOrderByAggregateInput = TextCountOrderByAggregateInput;