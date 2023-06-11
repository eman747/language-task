"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTextOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextWhereUniqueInput_1 = require("../../../inputs/TextWhereUniqueInput");
let FindUniqueTextOrThrowArgs = class FindUniqueTextOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextWhereUniqueInput_1.TextWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TextWhereUniqueInput_1.TextWhereUniqueInput)
], FindUniqueTextOrThrowArgs.prototype, "where", void 0);
FindUniqueTextOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTextOrThrowArgs);
exports.FindUniqueTextOrThrowArgs = FindUniqueTextOrThrowArgs;
