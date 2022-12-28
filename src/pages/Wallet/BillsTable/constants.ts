import { Column } from "../../../types/types";
import { BillsColumnsIds } from "./types";

const columns: Column[] = [
  {
    id: BillsColumnsIds.Date,
    label: "Date",
    isButton: false,
  },
  {
    id: BillsColumnsIds.Description,
    label: "Description",
    isButton: false,
  },
  {
    id: BillsColumnsIds.Amount,
    label: "Amount paid",
    isButton: false,
  },
  {
    id: BillsColumnsIds.Shared,
    label: "Shared",
    isButton: false,
  },
  {
    id: BillsColumnsIds.Actions,
    label: "Close",
    isButton: true,
  },
];

export default columns;
