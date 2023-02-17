import { Fragment } from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  if (props.items.length === 0) {
    return <div>No products found</div>;
  }
  const onChildInputCheck = (id, checked) => {
    props.onChildInputCheck(id, checked);
  };

  return (
    <Fragment>
      {props.items.map((product) => (
        <ProductItem
          onChildInputCheck={onChildInputCheck}
          key={product.id}
          id={product.id}
          name={product.name}
          quantity={product.quantity}
          price={product.price}
          createdDay={product.createdDay}
          isChecked={product.isChecked}
        />
      ))}
    </Fragment>
  );
};

export default ProductList;
