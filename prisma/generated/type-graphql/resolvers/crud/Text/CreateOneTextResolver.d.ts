import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTextArgs } from "./args/CreateOneTextArgs";
import { Text } from "../../../models/Text";
export declare class CreateOneTextResolver {
    createOneText(ctx: any, info: GraphQLResolveInfo, args: CreateOneTextArgs): Promise<Text>;
}
