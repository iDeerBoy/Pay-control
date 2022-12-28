import { Column } from "../../types/types";
import { WalletColumnsIds } from "./types";

const columns: Column[] = [
  {
    id: WalletColumnsIds.Date,
    label: "Month - Year",
    isButton: false,
  },
  {
    id: WalletColumnsIds.Spend,
    label: "Spend",
    isButton: false,
  },
  {
    id: WalletColumnsIds.Remaning,
    label: "Remaining wage",
    isButton: false,
  },
  {
    id: WalletColumnsIds.Add,
    label: "Add",
    isButton: true,
  },
];

export default columns;
