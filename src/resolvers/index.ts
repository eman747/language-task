import { NonEmptyArray } from "type-graphql";
import { TextResolver } from "./TextResolver";

// eslint-disable-next-line @typescript-eslint/ban-types
const resolvers: NonEmptyArray<Function> = [TextResolver];

export default resolvers;
