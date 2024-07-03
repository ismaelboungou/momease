import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventWhereInput = {
  eventDate?: DateTimeNullableFilter;
  eventName?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
