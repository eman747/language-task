"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TextMaxAggregate = class TextMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TextMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextMaxAggregate.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TextMaxAggregate.prototype, "translatedText", void 0);
TextMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TextMaxAggregate", {
        isAbstract: true
    })
], TextMaxAggregate);
exports.TextMaxAggregate = TextMaxAggregate;
