import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResourceCreateInput = {
  category?: string | null;
  content?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
