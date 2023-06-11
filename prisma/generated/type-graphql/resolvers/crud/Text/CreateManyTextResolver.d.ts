import type { GraphQLResolveInfo } from "graphql";
import { CreateManyTextArgs } from "./args/CreateManyTextArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTextResolver {
    createManyText(ctx: any, info: GraphQLResolveInfo, args: CreateManyTextArgs): Promise<AffectedRowsOutput>;
}
