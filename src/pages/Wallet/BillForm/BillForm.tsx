import { useEffect, useState } from "react";
import styles from "./BillForm.module.scss";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const BillForm = () => {
  const [shared, setShared] = useState(false);
  const [formData, setFormData] = useState({
    shared: shared,
  });
  const checkBoxColor = shared ? { color: "#9CFF2F" } : { color: "#103561" };

  const addBillHandler = () => console.log(formData);
  const formHandler = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  useEffect(() => {
    setFormData({
      ...formData,
      shared: shared,
    });
  }, [shared]);

  return (
    <div className={styles.BillForm}>
      <form>
        <ul>
          <li>
            <input type="date" name="date" onChange={(e) => formHandler(e)} />
          </li>
          <li>
            <input
              type="text"
              placeholder="Description"
              name="description"
              onChange={(e) => formHandler(e)}
            />
          </li>
          <li>
            <input
              type="number"
              placeholder="Amount paid"
              min={0}
              name="amount"
              onChange={(e) => formHandler(e)}
            />
          </li>
          <li>
            <label onClick={() => setShared(!shared)}>
              Shared:
              {shared ? (
                <CheckBoxIcon style={checkBoxColor} />
              ) : (
                <CheckBoxOutlineBlankIcon style={checkBoxColor} />
              )}
            </label>
          </li>
          <li>
            <IconButton color="inherit" onClick={addBillHandler}>
              <AddIcon />
            </IconButton>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default BillForm;
