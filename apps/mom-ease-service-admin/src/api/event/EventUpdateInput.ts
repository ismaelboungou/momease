import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EventUpdateInput = {
  eventDate?: Date | null;
  eventName?: string | null;
  location?: string | null;
  user?: UserWhereUniqueInput | null;
};
