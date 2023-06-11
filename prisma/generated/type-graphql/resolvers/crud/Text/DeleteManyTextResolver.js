"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTextResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyTextArgs_1 = require("./args/DeleteManyTextArgs");
const Text_1 = require("../../../models/Text");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTextResolver = class DeleteManyTextResolver {
    async deleteManyText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTextArgs_1.DeleteManyTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTextResolver.prototype, "deleteManyText", null);
DeleteManyTextResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Text_1.Text)
], DeleteManyTextResolver);
exports.DeleteManyTextResolver = DeleteManyTextResolver;
