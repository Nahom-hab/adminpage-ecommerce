import "./styles.css";
import { productData } from "@/data/productdata";


export default function ProductForOrder(props) {
  const product = productData.map((pro) => {
    if (props.product_id == pro.id) {
      return (
        <div className="product_for_order">
          <img src={"phone.jpg"} alt="" />
          <h3>Name: {pro.name}</h3>
          <h3>Price: {pro.price}</h3>
          <h3>Catagory: {pro.category}</h3>
        </div>
      );
    }
  });

  return <div>{product}</div>;
}
