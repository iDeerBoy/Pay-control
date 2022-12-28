import styles from './PageTable.module.scss'

const PageTable = ({ TableHeadChildren, TableBodyChildren }) => {
  return (
    <table className={styles.PageTable}>
      <thead>
        <tr>{TableHeadChildren}</tr>
      </thead>
      <tbody >{TableBodyChildren}</tbody>
    </table>
  );
};

export default PageTable;
