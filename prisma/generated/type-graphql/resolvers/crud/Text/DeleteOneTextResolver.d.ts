import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTextArgs } from "./args/DeleteOneTextArgs";
import { Text } from "../../../models/Text";
export declare class DeleteOneTextResolver {
    deleteOneText(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTextArgs): Promise<Text | null>;
}
