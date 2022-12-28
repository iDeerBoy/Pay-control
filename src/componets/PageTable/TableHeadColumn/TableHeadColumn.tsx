import React from "react";
import { TableCell } from "@mui/material";
import { Column } from "../../../types/types";

import styles from "./TableHeadColumn.module.scss";

const TableHeadColumn = ({ columns, addHandler }) => {
  return (
    <>
      {columns.map((column: Column) => {
        if (column.isButton) {
          return (
            <th key={column.id} className={styles.TableHeadColumn__Button}>
              <button onClick={addHandler}>{column.label}</button>
            </th>
          );
        }

        return (
          <th key={column.id} className={styles.TableHeadColumn__Cell}>
            {column.label}
          </th>
        );
      })}
    </>
  );
};

export default TableHeadColumn;

