import classes from "./HeadingTitle.module.css";

const HeadingTitle = (props) => {
  return (
    <h2 className={classes["box-heading"]}>
      <span>{props.name}</span>
    </h2>
  );
};

export default HeadingTitle;
