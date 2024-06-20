import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatMessageUpdateInput = {
  content?: string | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
