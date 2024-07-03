import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceWhereInput = {
  category?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
