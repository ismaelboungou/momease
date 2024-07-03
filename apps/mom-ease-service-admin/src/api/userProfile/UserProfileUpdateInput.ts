import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileUpdateInput = {
  familyInfo?: string | null;
  privacySettings?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
