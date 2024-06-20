import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetWhereInput = {
  amount?: FloatNullableFilter;
  cashOutMultiplier?: FloatNullableFilter;
  game?: GameWhereUniqueInput;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
