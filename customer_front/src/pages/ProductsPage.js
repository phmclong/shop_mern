import Layout from "../components/Layout/Layout";
import ProductList from "../components/Products/ProductList";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "ONLY HUMAN TEE - WHITE",
    // productDetailUrl: "https://zunezx.com/only-human-tee-white-p1522.html",
    mainImageUrl:
      "https://zunezx.com/upload/image/cache/data/banner/Tee/EB565EE7-19EC-4771-B449-23C6B729F609-477-crop-400-400.jpeg",
    subImageUrl:
      "https://zunezx.com/upload/image/cache/data/banner/Tee/5309DAEA-DD2B-457D-BA40-05752B6E59EF-06f-crop-400-400.jpeg",
    price: "420,000đ",
  },
  {
    id: "p2",
    name: "ONLY HUMAN TEE - BLACK",
    // productDetailUrl: "https://zunezx.com/only-human-tee-black-p1520.html",
    mainImageUrl:
      "https://zunezx.com/upload/image/cache/data/banner/Tee/07374B2F-04A0-4AFC-AA44-9A28134624B3-b33-crop-400-400.jpeg",
    subImageUrl:
      "https://zunezx.com/upload/image/cache/data/banner/Tee/3F4D027E-D3D8-4FAA-83E2-AC74203E6902-697-crop-400-400.jpeg",
    price: "420.000",
  },
  {
    id: "p3",
    name: "ONLY HUMAN TEE - BLACK",
    // productDetailUrl: "https://zunezx.com/only-human-tee-black-p1520.html",
    mainImageUrl:
      "https://zunezx.com/upload/image/cache/data/banner/Tee/07374B2F-04A0-4AFC-AA44-9A28134624B3-b33-crop-400-400.jpeg",
    subImageUrl:
      "https://zunezx.com/upload/image/cache/data/banner/Tee/3F4D027E-D3D8-4FAA-83E2-AC74203E6902-697-crop-400-400.jpeg",
    price: "420.000",
  },
];

const CustomerProductsPage = () => {
  return (
    <Layout title="Áo">
      <ProductList items={DUMMY_PRODUCTS} />
    </Layout>
  );
};

export default CustomerProductsPage;
