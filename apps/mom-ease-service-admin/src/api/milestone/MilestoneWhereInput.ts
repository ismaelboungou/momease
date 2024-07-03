import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MilestoneWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  milestoneDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
