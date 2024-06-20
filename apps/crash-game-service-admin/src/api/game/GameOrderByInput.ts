import { SortOrder } from "../../util/SortOrder";

export type GameOrderByInput = {
  crashPoint?: SortOrder;
  createdAt?: SortOrder;
  currentMultiplier?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
