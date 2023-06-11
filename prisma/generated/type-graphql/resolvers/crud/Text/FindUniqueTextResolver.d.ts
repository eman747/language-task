import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTextArgs } from "./args/FindUniqueTextArgs";
import { Text } from "../../../models/Text";
export declare class FindUniqueTextResolver {
    text(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTextArgs): Promise<Text | null>;
}
