import { User } from "../user/User";

export type ProductReview = {
  createdAt: Date;
  id: string;
  photoUrl: string | null;
  productName: string | null;
  rating: number | null;
  reviewContent: string | null;
  updatedAt: Date;
  user?: User | null;
};
