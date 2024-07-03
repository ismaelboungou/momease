import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentingTipWhereInput = {
  id?: StringFilter;
  tipContent?: StringNullableFilter;
  tipDate?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
