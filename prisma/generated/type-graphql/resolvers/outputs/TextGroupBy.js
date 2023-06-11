"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextAvgAggregate_1 = require("../outputs/TextAvgAggregate");
const TextCountAggregate_1 = require("../outputs/TextCountAggregate");
const TextMaxAggregate_1 = require("../outputs/TextMaxAggregate");
const TextMinAggregate_1 = require("../outputs/TextMinAggregate");
const TextSumAggregate_1 = require("../outputs/TextSumAggregate");
let TextGroupBy = class TextGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TextGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TextGroupBy.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TextGroupBy.prototype, "translatedText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextCountAggregate_1.TextCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextCountAggregate_1.TextCountAggregate)
], TextGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextAvgAggregate_1.TextAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextAvgAggregate_1.TextAvgAggregate)
], TextGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextSumAggregate_1.TextSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextSumAggregate_1.TextSumAggregate)
], TextGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextMinAggregate_1.TextMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextMinAggregate_1.TextMinAggregate)
], TextGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextMaxAggregate_1.TextMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextMaxAggregate_1.TextMaxAggregate)
], TextGroupBy.prototype, "_max", void 0);
TextGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TextGroupBy", {
        isAbstract: true
    })
], TextGroupBy);
exports.TextGroupBy = TextGroupBy;
