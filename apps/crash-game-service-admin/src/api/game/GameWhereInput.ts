import { BetListRelationFilter } from "../bet/BetListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GameWhereInput = {
  bets?: BetListRelationFilter;
  crashPoint?: FloatNullableFilter;
  currentMultiplier?: FloatNullableFilter;
  id?: StringFilter;
};
