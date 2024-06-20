import { Bet } from "../bet/Bet";
import { ChatMessage } from "../chatMessage/ChatMessage";
import { JsonValue } from "type-fest";

export type User = {
  bets?: Array<Bet>;
  chatMessages?: Array<ChatMessage>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  walletAddress: string | null;
};
