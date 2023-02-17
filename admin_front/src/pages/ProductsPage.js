import Layout from "../components/Layout/Layout";
import ProductHeader from "../components/Products/ProductHeader"
import ProductContent from "../components/Products/ProductContent";

const ProductsPage = () => {
  return (
    <Layout>
      <ProductHeader />
      <ProductContent />
    </Layout>
  );
};

export default ProductsPage;
