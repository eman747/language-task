"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TextMinAggregate = class TextMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TextMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextMinAggregate.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextMinAggregate.prototype, "translatedText", void 0);
TextMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TextMinAggregate", {
        isAbstract: true
    })
], TextMinAggregate);
exports.TextMinAggregate = TextMinAggregate;
