"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTextArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextWhereUniqueInput_1 = require("../../../inputs/TextWhereUniqueInput");
let FindUniqueTextArgs = class FindUniqueTextArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextWhereUniqueInput_1.TextWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TextWhereUniqueInput_1.TextWhereUniqueInput)
], FindUniqueTextArgs.prototype, "where", void 0);
FindUniqueTextArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTextArgs);
exports.FindUniqueTextArgs = FindUniqueTextArgs;
