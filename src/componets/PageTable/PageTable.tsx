import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import React from "react";
import styles from './PageTable.module.scss'

const PageTable = ({ TableHeadChildren, TableBodyChildren }) => {
  return (
    <Table className={styles.PageTable}>
      <TableHead>
        <TableRow>{TableHeadChildren}</TableRow>
      </TableHead>
      <TableBody >{TableBodyChildren}</TableBody>
    </Table>
  );
};

export default PageTable;
