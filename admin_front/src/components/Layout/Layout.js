import MainMenu from "./MainMenu";
import classes from "./Layout.module.css";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <MainMenu></MainMenu>
      <div className={classes["layout-wrapper"]}>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
