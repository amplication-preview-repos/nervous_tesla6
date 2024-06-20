import { User } from "../user/User";

export type ChatMessage = {
  content: string | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
