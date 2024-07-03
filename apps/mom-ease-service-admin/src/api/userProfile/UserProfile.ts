import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type UserProfile = {
  createdAt: Date;
  familyInfo: string | null;
  id: string;
  privacySettings: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
