"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TextScalarFieldEnum;
(function (TextScalarFieldEnum) {
    TextScalarFieldEnum["id"] = "id";
    TextScalarFieldEnum["language"] = "language";
    TextScalarFieldEnum["translatedText"] = "translatedText";
})(TextScalarFieldEnum = exports.TextScalarFieldEnum || (exports.TextScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TextScalarFieldEnum, {
    name: "TextScalarFieldEnum",
    description: undefined,
});
