import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTextOrThrowArgs } from "./args/FindFirstTextOrThrowArgs";
import { Text } from "../../../models/Text";
export declare class FindFirstTextOrThrowResolver {
    findFirstTextOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTextOrThrowArgs): Promise<Text | null>;
}
