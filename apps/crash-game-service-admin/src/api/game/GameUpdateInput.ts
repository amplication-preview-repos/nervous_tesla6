import { BetUpdateManyWithoutGamesInput } from "./BetUpdateManyWithoutGamesInput";

export type GameUpdateInput = {
  bets?: BetUpdateManyWithoutGamesInput;
  crashPoint?: number | null;
  currentMultiplier?: number | null;
};
