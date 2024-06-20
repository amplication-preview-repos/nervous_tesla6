import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatMessageCreateInput = {
  content?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
