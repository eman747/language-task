import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTextArgs } from "./args/UpsertOneTextArgs";
import { Text } from "../../../models/Text";
export declare class UpsertOneTextResolver {
    upsertOneText(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTextArgs): Promise<Text>;
}
