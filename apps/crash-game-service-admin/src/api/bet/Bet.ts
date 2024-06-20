import { Game } from "../game/Game";
import { User } from "../user/User";

export type Bet = {
  amount: number | null;
  cashOutMultiplier: number | null;
  createdAt: Date;
  game?: Game | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
