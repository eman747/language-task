"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TextUpdateManyMutationInput = class TextUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TextUpdateManyMutationInput.prototype, "language", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TextUpdateManyMutationInput.prototype, "translatedText", void 0);
TextUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TextUpdateManyMutationInput", {
        isAbstract: true
    })
], TextUpdateManyMutationInput);
exports.TextUpdateManyMutationInput = TextUpdateManyMutationInput;
