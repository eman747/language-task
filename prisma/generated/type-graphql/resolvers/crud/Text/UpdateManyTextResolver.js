"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTextResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTextArgs_1 = require("./args/UpdateManyTextArgs");
const Text_1 = require("../../../models/Text");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTextResolver = class UpdateManyTextResolver {
    async updateManyText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTextArgs_1.UpdateManyTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTextResolver.prototype, "updateManyText", null);
UpdateManyTextResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Text_1.Text)
], UpdateManyTextResolver);
exports.UpdateManyTextResolver = UpdateManyTextResolver;
