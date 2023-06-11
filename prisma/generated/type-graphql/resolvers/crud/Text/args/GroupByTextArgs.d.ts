import { TextOrderByWithAggregationInput } from "../../../inputs/TextOrderByWithAggregationInput";
import { TextScalarWhereWithAggregatesInput } from "../../../inputs/TextScalarWhereWithAggregatesInput";
import { TextWhereInput } from "../../../inputs/TextWhereInput";
export declare class GroupByTextArgs {
    where?: TextWhereInput | undefined;
    orderBy?: TextOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "language" | "translatedText">;
    having?: TextScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
