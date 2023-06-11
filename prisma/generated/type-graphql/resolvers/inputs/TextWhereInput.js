"use strict";
var TextWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let TextWhereInput = TextWhereInput_1 = class TextWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TextWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TextWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TextWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TextWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TextWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TextWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TextWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TextWhereInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TextWhereInput.prototype, "translatedText", void 0);
TextWhereInput = TextWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TextWhereInput", {
        isAbstract: true
    })
], TextWhereInput);
exports.TextWhereInput = TextWhereInput;
