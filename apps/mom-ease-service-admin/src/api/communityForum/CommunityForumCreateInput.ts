import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommunityForumCreateInput = {
  createdDate?: Date | null;
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
