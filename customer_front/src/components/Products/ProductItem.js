import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className="col l-4 m-6 c-12">
      <div className={classes["product-item"]}>
        <div className={classes.img}>
          <Link to="/">
            <img
              className={classes["main-img"]}
              src={props.mainImageUrl}
              alt="Áo"
            />
          </Link>
          <Link to="/">
            <img
              className={classes["sub-img"]}
              src={props.subImageUrl}
              alt="Áo"
            />
          </Link>
        </div>
        <div className={classes.info}>
          <h4>
            <Link to="/">{props.name}</Link>
          </h4>
        </div>
        <div className={classes["box-price"]}>
          <span className={classes.price}>{props.price}</span>
        </div>
        <div className={classes.actions}>
          <Link to="/">Thêm vào giỏ hàng</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
