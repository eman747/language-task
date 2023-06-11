"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTextResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTextArgs_1 = require("./args/AggregateTextArgs");
const Text_1 = require("../../../models/Text");
const AggregateText_1 = require("../../outputs/AggregateText");
const helpers_1 = require("../../../helpers");
let AggregateTextResolver = class AggregateTextResolver {
    async aggregateText(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).text.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateText_1.AggregateText, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTextArgs_1.AggregateTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTextResolver.prototype, "aggregateText", null);
AggregateTextResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Text_1.Text)
], AggregateTextResolver);
exports.AggregateTextResolver = AggregateTextResolver;
