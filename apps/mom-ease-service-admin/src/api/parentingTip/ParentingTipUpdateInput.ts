import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentingTipUpdateInput = {
  tipContent?: string | null;
  tipDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
