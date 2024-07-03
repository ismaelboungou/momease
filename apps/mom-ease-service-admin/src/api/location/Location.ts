import { User } from "../user/User";

export type Location = {
  address: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  rating: number | null;
  typeField: string | null;
  updatedAt: Date;
  user?: User | null;
};
