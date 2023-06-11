import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTextArgs } from "./args/DeleteManyTextArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTextResolver {
    deleteManyText(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTextArgs): Promise<AffectedRowsOutput>;
}
