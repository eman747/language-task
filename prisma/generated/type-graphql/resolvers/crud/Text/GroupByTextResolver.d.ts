import type { GraphQLResolveInfo } from "graphql";
import { GroupByTextArgs } from "./args/GroupByTextArgs";
import { TextGroupBy } from "../../outputs/TextGroupBy";
export declare class GroupByTextResolver {
    groupByText(ctx: any, info: GraphQLResolveInfo, args: GroupByTextArgs): Promise<TextGroupBy[]>;
}
