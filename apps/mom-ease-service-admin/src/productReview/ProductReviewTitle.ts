import { ProductReview as TProductReview } from "../api/productReview/ProductReview";

export const PRODUCTREVIEW_TITLE_FIELD = "productName";

export const ProductReviewTitle = (record: TProductReview): string => {
  return record.productName?.toString() || String(record.id);
};
