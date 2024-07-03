import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileWhereInput = {
  familyInfo?: StringNullableFilter;
  id?: StringFilter;
  privacySettings?: JsonFilter;
  user?: UserWhereUniqueInput;
};
