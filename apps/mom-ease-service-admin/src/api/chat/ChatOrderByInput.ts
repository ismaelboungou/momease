import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  receiver?: SortOrder;
  sender?: SortOrder;
  sentDate?: SortOrder;
  updatedAt?: SortOrder;
};
