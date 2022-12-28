import React from "react";
import { BillsColumnsIds } from "../types";
import { TableCell, TableRow } from "@mui/material";
import { getCurrency } from "../../../../utils/utils";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import styles from "./BillsRow.module.scss";
import ActionButton from "./ActionButton";

const renderByColumnId = (columnId, rowData) => {
  const { id, date, description, amount, shared, closedMonth } = rowData;
  const checkBoxColor = shared ? { color: "#9CFF2F" } : { color: "#103561" };
  let content: any;
  switch (columnId) {
    case BillsColumnsIds.Date:
      content = date;
      break;
    case BillsColumnsIds.Description:
      content = description;
      break;
    case BillsColumnsIds.Amount:
      content = getCurrency(amount);
      break;
    case BillsColumnsIds.Shared:
      content = shared ? (
        <CheckBoxIcon style={checkBoxColor} />
      ) : (
        <CheckBoxOutlineBlankIcon style={checkBoxColor} />
      );
      break;
    case BillsColumnsIds.Actions:
      content = <ActionButton billId={id} closedMonth={closedMonth} />;
      break;
    default:
      content = null;
  }

  return (
    <td key={`${columnId}-${id}`} className={styles.BillsRow__cell}>
      {content}
    </td>
  );
};

const BillsRow = ({ columns, rowData }) => {
  return (
    <>
      <tr className={styles.BillsRow}>
        {columns.map((columun) => renderByColumnId(columun.id, rowData))}
      </tr>
    </>
  );
};

export default BillsRow;
