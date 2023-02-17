import ProductItem from "./ProductItem";

const ProductList = (props) => {
  if (props.items.length === 0) {
    return <div>No products found</div>;
  }
  return (
    <>
      {props.items.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          //   productDetailUrl={props.productDetailUrl}
          mainImageUrl={product.mainImageUrl}
          subImageUrl={product.subImageUrl}
          price={product.price}
        />
      ))}
    </>
  );
};

export default ProductList;
