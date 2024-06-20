import { GameWhereUniqueInput } from "../game/GameWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BetUpdateInput = {
  amount?: number | null;
  cashOutMultiplier?: number | null;
  game?: GameWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
