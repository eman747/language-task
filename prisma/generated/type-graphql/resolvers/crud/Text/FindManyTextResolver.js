"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTextResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyTextArgs_1 = require("./args/FindManyTextArgs");
const Text_1 = require("../../../models/Text");
const helpers_1 = require("../../../helpers");
let FindManyTextResolver = class FindManyTextResolver {
    async texts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Text_1.Text], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTextArgs_1.FindManyTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTextResolver.prototype, "texts", null);
FindManyTextResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Text_1.Text)
], FindManyTextResolver);
exports.FindManyTextResolver = FindManyTextResolver;
