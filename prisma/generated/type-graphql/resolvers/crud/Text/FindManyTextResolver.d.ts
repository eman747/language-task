import type { GraphQLResolveInfo } from "graphql";
import { FindManyTextArgs } from "./args/FindManyTextArgs";
import { Text } from "../../../models/Text";
export declare class FindManyTextResolver {
    texts(ctx: any, info: GraphQLResolveInfo, args: FindManyTextArgs): Promise<Text[]>;
}
