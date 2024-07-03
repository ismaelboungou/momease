import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserProfileCreateInput = {
  familyInfo?: string | null;
  privacySettings?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
