import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  eventDate?: SortOrder;
  eventName?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
