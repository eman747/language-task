import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTextArgs } from "./args/FindFirstTextArgs";
import { Text } from "../../../models/Text";
export declare class FindFirstTextResolver {
    findFirstText(ctx: any, info: GraphQLResolveInfo, args: FindFirstTextArgs): Promise<Text | null>;
}
