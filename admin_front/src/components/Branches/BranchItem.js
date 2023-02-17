import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./BranchItem.module.css";

const BranchItem = (props) => {
  const [isDropdownShow, setIsDropdownShow] = useState(false);

  const dropdownHandler = (event) => {
    event.preventDefault();
    setIsDropdownShow(!isDropdownShow);
  };

  const inputCheckHandler = (event) => {
    event.preventDefault();
    props.onChildInputCheck(event.target.id, event.target.checked);
  };

  const editBranchHandler = (event) => {
    event.preventDefault();
    props.onEditBranch(props._id);
  }

  return (
    <tr className={classes.tr}>
      <td className={classes["td-form-check-input"]}>
        <input
          id={props.id}
          type="checkbox"
          className={classes["form-check-input"]}
          checked={props.isChecked}
          onChange={inputCheckHandler}
        />
      </td>
      <td className={`${classes.td} ${classes["td-id"]}`}>
        <Link to="#">#{props.id}</Link>
      </td>
      <td className={classes.td}>{props.name}</td>
      <td className={classes.td}>{props.address}</td>
      <td className={classes.td}>{props.province}</td>
      <td className={classes.td}>{props.createdAt}</td>
      <td className={classes.td}>
        <div className={classes.dropdown}>
          <button className={classes.btn} onClick={dropdownHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
          {isDropdownShow && (
            <div className={classes["dropdown-menu"]}>
              <button className={classes["dropdown-item"]} onClick={editBranchHandler}>Edit</button>
              <button className={classes["dropdown-item"]}>Delete</button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default BranchItem;
