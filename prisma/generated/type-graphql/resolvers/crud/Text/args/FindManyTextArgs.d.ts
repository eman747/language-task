import { TextOrderByWithRelationInput } from "../../../inputs/TextOrderByWithRelationInput";
import { TextWhereInput } from "../../../inputs/TextWhereInput";
import { TextWhereUniqueInput } from "../../../inputs/TextWhereUniqueInput";
export declare class FindManyTextArgs {
    where?: TextWhereInput | undefined;
    orderBy?: TextOrderByWithRelationInput[] | undefined;
    cursor?: TextWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "language" | "translatedText"> | undefined;
}
