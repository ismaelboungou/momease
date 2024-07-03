import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentingTipCreateInput = {
  tipContent?: string | null;
  tipDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
