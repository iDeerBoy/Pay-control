import React, { useCallback, useState } from "react";
import styles from "./Wallet.module.scss";
import PageTable from "../../componets/PageTable/PageTable";
import TableHeadColumn from "../../componets/PageTable/TableHeadColumn";
import columns from "./constants";
import TableBodyRowList from "../../componets/PageTable/TableBodyRowList/TableBodyRowList";
import walletData from "../../data/wallet";
import WalletRow from "./WalletRow/WalletRow";

const Wallet = () => {
  const [data, setData] = useState(walletData);
  const addHandler = useCallback(() => {
    setData([
      {
        id: 1,
        month: 12,
        year: 2022,
        closed: false,
        actualSalary: 3000000,
        bills: [],
      },
      ...data,
    ]);
  }, []);

  return (
    <section className={styles.Wallet}>
      <h1>Bills by month</h1>
      <PageTable
        TableHeadChildren={
          <TableHeadColumn columns={columns} addHandler={addHandler} />
        }
        TableBodyChildren={
          <TableBodyRowList
            columns={columns}
            rows={data}
            RowComponent={WalletRow}
          />
        }
      />
    </section>
  );
};

export default Wallet;
