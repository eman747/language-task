"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TextCountAggregate = class TextCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TextCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TextCountAggregate.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TextCountAggregate.prototype, "translatedText", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TextCountAggregate.prototype, "_all", void 0);
TextCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TextCountAggregate", {
        isAbstract: true
    })
], TextCountAggregate);
exports.TextCountAggregate = TextCountAggregate;
