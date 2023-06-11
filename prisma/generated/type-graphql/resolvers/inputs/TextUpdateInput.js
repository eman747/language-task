"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TextUpdateInput = class TextUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TextUpdateInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TextUpdateInput.prototype, "translatedText", void 0);
TextUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TextUpdateInput", {
        isAbstract: true
    })
], TextUpdateInput);
exports.TextUpdateInput = TextUpdateInput;
