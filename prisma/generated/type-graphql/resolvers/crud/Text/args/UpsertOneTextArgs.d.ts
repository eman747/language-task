import { TextCreateInput } from "../../../inputs/TextCreateInput";
import { TextUpdateInput } from "../../../inputs/TextUpdateInput";
import { TextWhereUniqueInput } from "../../../inputs/TextWhereUniqueInput";
export declare class UpsertOneTextArgs {
    where: TextWhereUniqueInput;
    create: TextCreateInput;
    update: TextUpdateInput;
}
