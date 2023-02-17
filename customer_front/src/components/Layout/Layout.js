import MainNavigation from "./MainNavigation";
import HeadingTitle from "./HeadingTitle";
import classes from "./Layout.module.css";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <div className={classes["background-container"]}>
        <div className="grid wide">
          <HeadingTitle name={props.title}></HeadingTitle>
          <div className="row">{props.children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
