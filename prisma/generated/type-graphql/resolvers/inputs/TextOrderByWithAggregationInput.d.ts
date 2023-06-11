import { TextAvgOrderByAggregateInput } from "../inputs/TextAvgOrderByAggregateInput";
import { TextCountOrderByAggregateInput } from "../inputs/TextCountOrderByAggregateInput";
import { TextMaxOrderByAggregateInput } from "../inputs/TextMaxOrderByAggregateInput";
import { TextMinOrderByAggregateInput } from "../inputs/TextMinOrderByAggregateInput";
import { TextSumOrderByAggregateInput } from "../inputs/TextSumOrderByAggregateInput";
export declare class TextOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    language?: "asc" | "desc" | undefined;
    translatedText?: "asc" | "desc" | undefined;
    _count?: TextCountOrderByAggregateInput | undefined;
    _avg?: TextAvgOrderByAggregateInput | undefined;
    _max?: TextMaxOrderByAggregateInput | undefined;
    _min?: TextMinOrderByAggregateInput | undefined;
    _sum?: TextSumOrderByAggregateInput | undefined;
}
