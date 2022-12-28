import React from "react";
import { IconButton } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const AcctionButton = ({isCollapseOpen, openCollapseHandler}) => {

  return (
    <>
      <IconButton
        onClick={openCollapseHandler}
        color={"inherit"}
      >
        {isCollapseOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </IconButton>
    </>
  );
};

export default AcctionButton;
