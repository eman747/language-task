"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTextArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TextWhereInput_1 = require("../../../inputs/TextWhereInput");
let DeleteManyTextArgs = class DeleteManyTextArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TextWhereInput_1.TextWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TextWhereInput_1.TextWhereInput)
], DeleteManyTextArgs.prototype, "where", void 0);
DeleteManyTextArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTextArgs);
exports.DeleteManyTextArgs = DeleteManyTextArgs;
