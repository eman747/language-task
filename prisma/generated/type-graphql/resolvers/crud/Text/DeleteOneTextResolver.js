"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTextResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneTextArgs_1 = require("./args/DeleteOneTextArgs");
const Text_1 = require("../../../models/Text");
const helpers_1 = require("../../../helpers");
let DeleteOneTextResolver = class DeleteOneTextResolver {
    async deleteOneText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Text_1.Text, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTextArgs_1.DeleteOneTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneTextResolver.prototype, "deleteOneText", null);
DeleteOneTextResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Text_1.Text)
], DeleteOneTextResolver);
exports.DeleteOneTextResolver = DeleteOneTextResolver;
