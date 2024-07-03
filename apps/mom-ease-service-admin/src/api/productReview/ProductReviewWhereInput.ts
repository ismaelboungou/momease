import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductReviewWhereInput = {
  id?: StringFilter;
  photoUrl?: StringNullableFilter;
  productName?: StringNullableFilter;
  rating?: IntNullableFilter;
  reviewContent?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
