import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LocationCreateInput = {
  address?: string | null;
  name?: string | null;
  rating?: number | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
