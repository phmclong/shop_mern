import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const [isDropdownShow, setIsDropdownShow] = useState(false);
  
  const dropdownHandler = (event) => {
    event.preventDefault();
    setIsDropdownShow(!isDropdownShow);
  };

  const inputCheckHandler = (event) => {
    event.preventDefault();
    props.onChildInputCheck(event.target.id, event.target.checked);
  };

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
      <td className={classes.td}>
        <Link to="#">
          {/* <img className={classes.img} src={props.imageUrl} /> */}
          <img
            className={classes.img}
            src="https://zunezx.com/upload/image/cache/data/banner/Tee/07374B2F-04A0-4AFC-AA44-9A28134624B3-b33-crop-400-400.jpeg"
            alt="Áo"
          />
        </Link>
      </td>
      <td className={classes.td}>{props.name}</td>
      <td className={classes.td}>{props.quantity}</td>
      <td className={classes.td}>{props.price}đ</td>
      <td className={classes.td}>{props.createdDay}</td>
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
              <button className={classes["dropdown-item"]}>Edit</button>
              <button className={classes["dropdown-item"]}>Delete</button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default ProductItem;
