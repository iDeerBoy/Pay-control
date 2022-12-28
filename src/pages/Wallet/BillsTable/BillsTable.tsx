import React, { useCallback } from "react";
import PageTable from "../../../componets/PageTable";
import TableBodyRowList from "../../../componets/PageTable/TableBodyRowList";
import TableHeadColumn from "../../../componets/PageTable/TableHeadColumn";
import BillForm from "../BillForm";
import BillsRow from "./BillsRow";
import columns from "./constants";

const BillsTable = ({ billsData, closedMonth }) => {
  const closeHandler = useCallback(() => {
    console.log("Close");
  }, []);

  return (
    <>
      {!closedMonth && <BillForm />}
      {billsData.length > 0 && (
        <PageTable
          TableHeadChildren={
            <TableHeadColumn columns={columns} addHandler={closeHandler} />
          }
          TableBodyChildren={
            <TableBodyRowList
              columns={columns}
              rows={billsData}
              RowComponent={BillsRow}
            />
          }
        />
      )}
    </>
  );
};

export default BillsTable;
