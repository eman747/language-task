import { TextAvgAggregate } from "../outputs/TextAvgAggregate";
import { TextCountAggregate } from "../outputs/TextCountAggregate";
import { TextMaxAggregate } from "../outputs/TextMaxAggregate";
import { TextMinAggregate } from "../outputs/TextMinAggregate";
import { TextSumAggregate } from "../outputs/TextSumAggregate";
export declare class AggregateText {
    _count: TextCountAggregate | null;
    _avg: TextAvgAggregate | null;
    _sum: TextSumAggregate | null;
    _min: TextMinAggregate | null;
    _max: TextMaxAggregate | null;
}
