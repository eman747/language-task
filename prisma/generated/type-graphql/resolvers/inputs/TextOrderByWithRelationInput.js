"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TextOrderByWithRelationInput = class TextOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextOrderByWithRelationInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextOrderByWithRelationInput.prototype, "translatedText", void 0);
TextOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TextOrderByWithRelationInput", {
        isAbstract: true
    })
], TextOrderByWithRelationInput);
exports.TextOrderByWithRelationInput = TextOrderByWithRelationInput;
