import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductReviewCreateInput = {
  photoUrl?: string | null;
  productName?: string | null;
  rating?: number | null;
  reviewContent?: string | null;
  user?: UserWhereUniqueInput | null;
};
