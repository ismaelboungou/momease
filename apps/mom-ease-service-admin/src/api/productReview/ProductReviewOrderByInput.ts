import { SortOrder } from "../../util/SortOrder";

export type ProductReviewOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  photoUrl?: SortOrder;
  productName?: SortOrder;
  rating?: SortOrder;
  reviewContent?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
