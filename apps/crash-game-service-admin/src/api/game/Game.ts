import { Bet } from "../bet/Bet";

export type Game = {
  bets?: Array<Bet>;
  crashPoint: number | null;
  createdAt: Date;
  currentMultiplier: number | null;
  id: string;
  updatedAt: Date;
};
