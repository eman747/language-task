"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTextArgs_1 = require("./args/AggregateTextArgs");
const CreateManyTextArgs_1 = require("./args/CreateManyTextArgs");
const CreateOneTextArgs_1 = require("./args/CreateOneTextArgs");
const DeleteManyTextArgs_1 = require("./args/DeleteManyTextArgs");
const DeleteOneTextArgs_1 = require("./args/DeleteOneTextArgs");
const FindFirstTextArgs_1 = require("./args/FindFirstTextArgs");
const FindFirstTextOrThrowArgs_1 = require("./args/FindFirstTextOrThrowArgs");
const FindManyTextArgs_1 = require("./args/FindManyTextArgs");
const FindUniqueTextArgs_1 = require("./args/FindUniqueTextArgs");
const FindUniqueTextOrThrowArgs_1 = require("./args/FindUniqueTextOrThrowArgs");
const GroupByTextArgs_1 = require("./args/GroupByTextArgs");
const UpdateManyTextArgs_1 = require("./args/UpdateManyTextArgs");
const UpdateOneTextArgs_1 = require("./args/UpdateOneTextArgs");
const UpsertOneTextArgs_1 = require("./args/UpsertOneTextArgs");
const helpers_1 = require("../../../helpers");
const Text_1 = require("../../../models/Text");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateText_1 = require("../../outputs/AggregateText");
const TextGroupBy_1 = require("../../outputs/TextGroupBy");
let TextCrudResolver = class TextCrudResolver {
    async aggregateText(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).text.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTextOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async texts(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async text(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByText(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneText(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).text.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], TextCrudResolver.prototype, "aggregateText", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyTextArgs_1.CreateManyTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TextCrudResolver.prototype, "createManyText", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Text_1.Text, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTextArgs_1.CreateOneTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TextCrudResolver.prototype, "createOneText", null);
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
], TextCrudResolver.prototype, "deleteManyText", null);
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
], TextCrudResolver.prototype, "deleteOneText", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Text_1.Text, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTextArgs_1.FindFirstTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TextCrudResolver.prototype, "findFirstText", null);
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
], TextCrudResolver.prototype, "findFirstTextOrThrow", null);
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
], TextCrudResolver.prototype, "texts", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Text_1.Text, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTextArgs_1.FindUniqueTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TextCrudResolver.prototype, "text", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Text_1.Text, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTextOrThrowArgs_1.FindUniqueTextOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TextCrudResolver.prototype, "getText", null);
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
], TextCrudResolver.prototype, "groupByText", null);
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
], TextCrudResolver.prototype, "updateManyText", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Text_1.Text, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTextArgs_1.UpdateOneTextArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TextCrudResolver.prototype, "updateOneText", null);
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
], TextCrudResolver.prototype, "upsertOneText", null);
TextCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Text_1.Text)
], TextCrudResolver);
exports.TextCrudResolver = TextCrudResolver;
