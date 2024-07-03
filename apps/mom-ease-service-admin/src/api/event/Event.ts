import { User } from "../user/User";

export type Event = {
  createdAt: Date;
  eventDate: Date | null;
  eventName: string | null;
  id: string;
  location: string | null;
  updatedAt: Date;
  user?: User | null;
};
