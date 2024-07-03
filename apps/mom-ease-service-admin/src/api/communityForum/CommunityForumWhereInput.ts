import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunityForumWhereInput = {
  createdDate?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
