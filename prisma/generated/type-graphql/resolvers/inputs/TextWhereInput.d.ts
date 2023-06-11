import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TextWhereInput {
    AND?: TextWhereInput[] | undefined;
    OR?: TextWhereInput[] | undefined;
    NOT?: TextWhereInput[] | undefined;
    id?: IntFilter | undefined;
    language?: StringFilter | undefined;
    translatedText?: StringFilter | undefined;
}
