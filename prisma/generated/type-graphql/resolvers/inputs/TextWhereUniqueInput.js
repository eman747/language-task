"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TextWhereUniqueInput = class TextWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TextWhereUniqueInput.prototype, "id", void 0);
TextWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TextWhereUniqueInput", {
        isAbstract: true
    })
], TextWhereUniqueInput);
exports.TextWhereUniqueInput = TextWhereUniqueInput;
