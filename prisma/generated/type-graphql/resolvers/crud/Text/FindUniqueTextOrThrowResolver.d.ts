import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTextOrThrowArgs } from "./args/FindUniqueTextOrThrowArgs";
import { Text } from "../../../models/Text";
export declare class FindUniqueTextOrThrowResolver {
    getText(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTextOrThrowArgs): Promise<Text | null>;
}
