import { SortOrder } from "../../util/SortOrder";

export type BetOrderByInput = {
  amount?: SortOrder;
  cashOutMultiplier?: SortOrder;
  createdAt?: SortOrder;
  gameId?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
