import { User } from "../user/User";

export type ParentingTip = {
  createdAt: Date;
  id: string;
  tipContent: string | null;
  tipDate: Date | null;
  updatedAt: Date;
  user?: User | null;
};
