import { BetUpdateManyWithoutUsersInput } from "./BetUpdateManyWithoutUsersInput";
import { ChatMessageUpdateManyWithoutUsersInput } from "./ChatMessageUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bets?: BetUpdateManyWithoutUsersInput;
  chatMessages?: ChatMessageUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  walletAddress?: string | null;
};
