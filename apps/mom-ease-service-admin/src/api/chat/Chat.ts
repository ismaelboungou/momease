export type Chat = {
  createdAt: Date;
  id: string;
  message: string | null;
  receiver: string | null;
  sender: string | null;
  sentDate: Date | null;
  updatedAt: Date;
};
