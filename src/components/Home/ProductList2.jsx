import "./Section.css";
import Card2 from "./Card2";
import products from "../../mock/products";
function ProductList2() {
  return (
    <>
      <div className="container-fluid mt-5 d-flex flex-row flex-wrap">
        {products.map(function (product, i) {
          return (
            <Card2
              key={i}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
      
    </>
  );
}
export default ProductList2;
