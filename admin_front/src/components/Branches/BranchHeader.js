import { Fragment } from "react";

import classes from "./BranchHeader.module.css";

const BranchHeader = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <div className={classes["page-title"]}>Branches</div>
        <form className={classes["search-form"]}>
          <div className={classes["input-group"]}>
            <button className={classes.btn} type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search..."
              className={classes["form-control"]}
            />
          </div>
        </form>
        <div className={classes["header-bar"]}>
          <button className={classes["btn-icon"]} onClick={props.onAddBranch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            Add Branch
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default BranchHeader;
