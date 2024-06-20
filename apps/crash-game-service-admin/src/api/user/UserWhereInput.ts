import { BetListRelationFilter } from "../bet/BetListRelationFilter";
import { ChatMessageListRelationFilter } from "../chatMessage/ChatMessageListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  bets?: BetListRelationFilter;
  chatMessages?: ChatMessageListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  walletAddress?: StringNullableFilter;
};
