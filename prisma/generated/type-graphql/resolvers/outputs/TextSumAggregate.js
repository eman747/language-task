"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TextSumAggregate = class TextSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TextSumAggregate.prototype, "id", void 0);
TextSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TextSumAggregate", {
        isAbstract: true
    })
], TextSumAggregate);
exports.TextSumAggregate = TextSumAggregate;
