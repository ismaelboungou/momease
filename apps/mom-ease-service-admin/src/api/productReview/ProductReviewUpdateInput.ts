import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProductReviewUpdateInput = {
  photoUrl?: string | null;
  productName?: string | null;
  rating?: number | null;
  reviewContent?: string | null;
  user?: UserWhereUniqueInput | null;
};
