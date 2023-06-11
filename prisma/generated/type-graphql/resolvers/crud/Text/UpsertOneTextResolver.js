"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTextResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneTextArgs_1 = require("./args/UpsertOneTextArgs");
const Text_1 = require("../../../models/Text");
const helpers_1 = require("../../../helpers");
let UpsertOneTextResolver = class UpsertOneTextResolver {
    async upsertOneText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Text_1.Text, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTextArgs_1.UpsertOneTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTextResolver.prototype, "upsertOneText", null);
UpsertOneTextResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Text_1.Text)
], UpsertOneTextResolver);
exports.UpsertOneTextResolver = UpsertOneTextResolver;
