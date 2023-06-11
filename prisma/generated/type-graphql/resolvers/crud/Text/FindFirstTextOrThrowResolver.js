"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTextOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTextOrThrowArgs_1 = require("./args/FindFirstTextOrThrowArgs");
const Text_1 = require("../../../models/Text");
const helpers_1 = require("../../../helpers");
let FindFirstTextOrThrowResolver = class FindFirstTextOrThrowResolver {
    async findFirstTextOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Text_1.Text, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTextOrThrowArgs_1.FindFirstTextOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTextOrThrowResolver.prototype, "findFirstTextOrThrow", null);
FindFirstTextOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Text_1.Text)
], FindFirstTextOrThrowResolver);
exports.FindFirstTextOrThrowResolver = FindFirstTextOrThrowResolver;
