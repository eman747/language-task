import type { GraphQLResolveInfo } from "graphql";
import { AggregateTextArgs } from "./args/AggregateTextArgs";
import { AggregateText } from "../../outputs/AggregateText";
export declare class AggregateTextResolver {
    aggregateText(ctx: any, info: GraphQLResolveInfo, args: AggregateTextArgs): Promise<AggregateText>;
}
