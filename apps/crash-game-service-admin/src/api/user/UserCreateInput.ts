import { BetCreateNestedManyWithoutUsersInput } from "./BetCreateNestedManyWithoutUsersInput";
import { ChatMessageCreateNestedManyWithoutUsersInput } from "./ChatMessageCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bets?: BetCreateNestedManyWithoutUsersInput;
  chatMessages?: ChatMessageCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  walletAddress?: string | null;
};
