import React from "react";

const TableBodyRowList = ({ columns, rows, RowComponent }) => {
  return (
    <>
    {
        rows.map(rowData => (
            <RowComponent columns={columns} key={rowData.id} rowData={rowData} />
        ))
    }
    </>
  )
};

export default TableBodyRowList;
