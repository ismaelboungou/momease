import { User } from "../user/User";

export type Resource = {
  category: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
