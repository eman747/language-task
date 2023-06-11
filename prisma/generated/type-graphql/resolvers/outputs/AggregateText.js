"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateText = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextAvgAggregate_1 = require("../outputs/TextAvgAggregate");
const TextCountAggregate_1 = require("../outputs/TextCountAggregate");
const TextMaxAggregate_1 = require("../outputs/TextMaxAggregate");
const TextMinAggregate_1 = require("../outputs/TextMinAggregate");
const TextSumAggregate_1 = require("../outputs/TextSumAggregate");
let AggregateText = class AggregateText {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextCountAggregate_1.TextCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextCountAggregate_1.TextCountAggregate)
], AggregateText.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextAvgAggregate_1.TextAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextAvgAggregate_1.TextAvgAggregate)
], AggregateText.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextSumAggregate_1.TextSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextSumAggregate_1.TextSumAggregate)
], AggregateText.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextMinAggregate_1.TextMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextMinAggregate_1.TextMinAggregate)
], AggregateText.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextMaxAggregate_1.TextMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextMaxAggregate_1.TextMaxAggregate)
], AggregateText.prototype, "_max", void 0);
AggregateText = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateText", {
        isAbstract: true
    })
], AggregateText);
exports.AggregateText = AggregateText;
