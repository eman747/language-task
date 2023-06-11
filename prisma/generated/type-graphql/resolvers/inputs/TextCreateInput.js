"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TextCreateInput = class TextCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TextCreateInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TextCreateInput.prototype, "translatedText", void 0);
TextCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TextCreateInput", {
        isAbstract: true
    })
], TextCreateInput);
exports.TextCreateInput = TextCreateInput;
