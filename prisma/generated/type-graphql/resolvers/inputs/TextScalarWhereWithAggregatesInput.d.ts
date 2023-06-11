import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TextScalarWhereWithAggregatesInput {
    AND?: TextScalarWhereWithAggregatesInput[] | undefined;
    OR?: TextScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TextScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    language?: StringWithAggregatesFilter | undefined;
    translatedText?: StringWithAggregatesFilter | undefined;
}
