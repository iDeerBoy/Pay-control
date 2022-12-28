import { useState } from "react";
import { WalletColumnsIds } from "../types";
import { getMonth, getSpend, getCurrency } from "../../../utils/utils";
import styles from "./WalletRow.module.scss";
import AcctionButton from "./AcctionButton";
import { Collapse } from "@mui/material";
import BillsTable from '../BillsTable/BillsTable';

const renderByColumnId = (
  columnId,
  rowData,
  isCollapseOpen,
  openCollapseHandler
) => {
  const { id, month, year, bills, closed, actualSalary } = rowData;
  const salaryBalance =
    getSpend(bills) < actualSalary
      ? { backgroundColor: "rgba(156, 255, 47, 0.2)" }
      : { backgroundColor: "rgba(185, 0, 31, 0.35)" };
  const colorCell = closed ? salaryBalance : { backgroundColor: "#103561" };
  let content: any;

  switch (columnId) {
    case WalletColumnsIds.Date:
      content = getMonth(month, year);
      break;
    case WalletColumnsIds.Spend:
      content = getCurrency(getSpend(bills));
      break;
    case WalletColumnsIds.Remaning:
      content = getCurrency(actualSalary - getSpend(bills));
      break;
    case WalletColumnsIds.Add:
      content = (
        <AcctionButton
          isCollapseOpen={isCollapseOpen}
          openCollapseHandler={openCollapseHandler}
        />
      );
      break;
    default:
      content = null;
  }

  return (
    <td
      key={`${columnId}-${id}`}
      className={styles.WalletRow__cell}
      style={colorCell}
    >
      {content}
    </td>
  );
};

const WalletRow = ({ columns, rowData }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const openCollapseHandler = () => setIsCollapseOpen(!isCollapseOpen);
  const billsData = rowData.bills.map((i: any) => ({...i, closedMonth: rowData.closed}))
  return (
    <>
      <tr className={styles.WalletRow}>
        {columns.map((column) =>
          renderByColumnId(
            column.id,
            rowData,
            isCollapseOpen,
            openCollapseHandler
          )
        )}
      </tr>
      <tr>
        <td className={styles.WalletRow__Collapse} colSpan={4} >
          <Collapse in={isCollapseOpen} unmountOnExit>
            <div className={styles.WalletRow__CollapseContent}>
              <BillsTable billsData={billsData} closedMonth={rowData.closed} />
            </div>
          </Collapse>
        </td>
      </tr>
    </>
  );
};

export default WalletRow;
