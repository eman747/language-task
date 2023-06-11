"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTextResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByTextArgs_1 = require("./args/GroupByTextArgs");
const Text_1 = require("../../../models/Text");
const TextGroupBy_1 = require("../../outputs/TextGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTextResolver = class GroupByTextResolver {
    async groupByText(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TextGroupBy_1.TextGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTextArgs_1.GroupByTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTextResolver.prototype, "groupByText", null);
GroupByTextResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Text_1.Text)
], GroupByTextResolver);
exports.GroupByTextResolver = GroupByTextResolver;
