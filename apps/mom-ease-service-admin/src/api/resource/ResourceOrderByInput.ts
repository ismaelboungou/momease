import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  category?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
