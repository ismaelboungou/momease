import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MilestoneUpdateInput = {
  description?: string | null;
  milestoneDate?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
