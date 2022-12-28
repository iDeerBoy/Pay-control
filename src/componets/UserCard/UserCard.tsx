import React, { useState } from "react";
import userData from "../../data/user";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./UserCard.module.scss";
import { getCurrency } from '../../utils/utils';

const UserCard = () => {
  const { name, company, role, sr, salary, antiquity } = userData;
  const [newUserData, setNewUserData] = useState({});

  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const buttonHandler = () => setIsEdit(!isEdit);
  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUserData({
      newUserData,
      [e.target.name]: e.target.value,
    });
  };
  const updateUser = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsEdit(false)
      console.log(newUserData);
    }, 1500);
  }

  if (isEdit) {
    return (
      <div className={styles.UserCard}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder={name}
          autoComplete="off"
          onChange={formHandler}
        />
        <input
          type="text"
          name="company"
          id="company"
          placeholder={company}
          onChange={formHandler}
        />
        <input
          type="text"
          name="sr"
          id="sr"
          placeholder={sr}
          onChange={formHandler}
        />
        <input
          type="text"
          name="role"
          id="role"
          placeholder={role}
          onChange={formHandler}
        />
        <input
          type="text"
          name="salary"
          id="salary"
          placeholder={`${getCurrency(salary)}`}
          onChange={formHandler}
        />
        <input
          type="date"
          name="antiquity"
          defaultValue={antiquity}
          onChange={formHandler}
        />
        <button className={styles.UserCard__editCheck} onClick={updateUser}>
          {!isLoading ? <CheckIcon /> : <CircularProgress color="inherit" size={15} />}
        </button>
      </div>
    );
  }
  return (
    <div className={styles.UserCard}>
      <b>{name}</b>
      <p>{company}</p>
      <b>{sr}</b>
      <p>{role}</p>
      <h5>{getCurrency(salary)}</h5>
      <p>{antiquity}</p>
      <button className={styles.UserCard__edit} onClick={buttonHandler}>
        <EditIcon />
      </button>
    </div>
  );
};

export default UserCard;
