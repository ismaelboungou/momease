import { User } from "../user/User";

export type Milestone = {
  createdAt: Date;
  description: string | null;
  id: string;
  milestoneDate: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
