import { User } from "../user/User";

export type CommunityForum = {
  createdAt: Date;
  createdDate: Date | null;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
