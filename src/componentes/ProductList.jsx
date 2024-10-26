import "./Section.css";
import Card from "./Card";
import products from "../mock/products";
function ProductList() {
  return (
    <>
      {products.map(function (product, i) {
        return (
          <Card
            key={i}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        );
      })}
    </>
  );
}
export default ProductList;
