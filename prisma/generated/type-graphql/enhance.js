"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Text: crudResolvers.TextCrudResolver
};
const actionResolversMap = {
    Text: {
        aggregateText: actionResolvers.AggregateTextResolver,
        createManyText: actionResolvers.CreateManyTextResolver,
        createOneText: actionResolvers.CreateOneTextResolver,
        deleteManyText: actionResolvers.DeleteManyTextResolver,
        deleteOneText: actionResolvers.DeleteOneTextResolver,
        findFirstText: actionResolvers.FindFirstTextResolver,
        findFirstTextOrThrow: actionResolvers.FindFirstTextOrThrowResolver,
        texts: actionResolvers.FindManyTextResolver,
        text: actionResolvers.FindUniqueTextResolver,
        getText: actionResolvers.FindUniqueTextOrThrowResolver,
        groupByText: actionResolvers.GroupByTextResolver,
        updateManyText: actionResolvers.UpdateManyTextResolver,
        updateOneText: actionResolvers.UpdateOneTextResolver,
        upsertOneText: actionResolvers.UpsertOneTextResolver
    }
};
const crudResolversInfo = {
    Text: ["aggregateText", "createManyText", "createOneText", "deleteManyText", "deleteOneText", "findFirstText", "findFirstTextOrThrow", "texts", "text", "getText", "groupByText", "updateManyText", "updateOneText", "upsertOneText"]
};
const argsInfo = {
    AggregateTextArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyTextArgs: ["data", "skipDuplicates"],
    CreateOneTextArgs: ["data"],
    DeleteManyTextArgs: ["where"],
    DeleteOneTextArgs: ["where"],
    FindFirstTextArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstTextOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTextArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTextArgs: ["where"],
    FindUniqueTextOrThrowArgs: ["where"],
    GroupByTextArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTextArgs: ["data", "where"],
    UpdateOneTextArgs: ["data", "where"],
    UpsertOneTextArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators !== null && allActionsDecorators !== void 0 ? allActionsDecorators : [],
                ...operationKindDecorators !== null && operationKindDecorators !== void 0 ? operationKindDecorators : [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    var _a;
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = (_a = enhanceConfig.fields._all) !== null && _a !== void 0 ? _a : [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn !== null && maybeDecoratorsOrFn !== void 0 ? maybeDecoratorsOrFn : []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Text: ["id", "language", "translatedText"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateText: ["_count", "_avg", "_sum", "_min", "_max"],
    TextGroupBy: ["id", "language", "translatedText", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    TextCountAggregate: ["id", "language", "translatedText", "_all"],
    TextAvgAggregate: ["id"],
    TextSumAggregate: ["id"],
    TextMinAggregate: ["id", "language", "translatedText"],
    TextMaxAggregate: ["id", "language", "translatedText"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    TextWhereInput: ["AND", "OR", "NOT", "id", "language", "translatedText"],
    TextOrderByWithRelationInput: ["id", "language", "translatedText"],
    TextWhereUniqueInput: ["id"],
    TextOrderByWithAggregationInput: ["id", "language", "translatedText", "_count", "_avg", "_max", "_min", "_sum"],
    TextScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "language", "translatedText"],
    TextCreateInput: ["language", "translatedText"],
    TextUpdateInput: ["language", "translatedText"],
    TextCreateManyInput: ["id", "language", "translatedText"],
    TextUpdateManyMutationInput: ["language", "translatedText"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    TextCountOrderByAggregateInput: ["id", "language", "translatedText"],
    TextAvgOrderByAggregateInput: ["id"],
    TextMaxOrderByAggregateInput: ["id", "language", "translatedText"],
    TextMinOrderByAggregateInput: ["id", "language", "translatedText"],
    TextSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringFieldUpdateOperationsInput: ["set"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
