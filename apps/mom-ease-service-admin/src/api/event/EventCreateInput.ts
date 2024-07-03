import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventCreateInput = {
  eventDate?: Date | null;
  eventName?: string | null;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
};
