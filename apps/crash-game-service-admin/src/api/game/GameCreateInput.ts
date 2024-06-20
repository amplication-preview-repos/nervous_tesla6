import { BetCreateNestedManyWithoutGamesInput } from "./BetCreateNestedManyWithoutGamesInput";

export type GameCreateInput = {
  bets?: BetCreateNestedManyWithoutGamesInput;
  crashPoint?: number | null;
  currentMultiplier?: number | null;
};
