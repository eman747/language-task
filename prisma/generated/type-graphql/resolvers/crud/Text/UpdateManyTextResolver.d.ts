import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTextArgs } from "./args/UpdateManyTextArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTextResolver {
    updateManyText(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTextArgs): Promise<AffectedRowsOutput>;
}
