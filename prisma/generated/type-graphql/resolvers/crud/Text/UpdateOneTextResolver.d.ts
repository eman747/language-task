import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTextArgs } from "./args/UpdateOneTextArgs";
import { Text } from "../../../models/Text";
export declare class UpdateOneTextResolver {
    updateOneText(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTextArgs): Promise<Text | null>;
}
