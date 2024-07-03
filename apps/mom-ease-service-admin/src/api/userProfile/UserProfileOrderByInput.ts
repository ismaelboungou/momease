import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  createdAt?: SortOrder;
  familyInfo?: SortOrder;
  id?: SortOrder;
  privacySettings?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
