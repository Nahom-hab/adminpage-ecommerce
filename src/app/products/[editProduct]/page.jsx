"use client";

import { useEffect, useState } from "react";
import { useParams,useRouter } from "next/navigation";
// import { productData, updateProduct } from "@app/client/data/product.data";
import { productData } from "@/data/productdata";
import EditcardModified from "@/component/editcardmodified/editcardmod";

export default function EditProduct() {
  const { editProduct } = useParams();

  const [formData, setFormData] = useState({
    name: "banakjak",
    description: "",
    price: 0,
    quantity: "",
    image: "",
    preview: "",
  });
  

  useEffect(() => {
    
    if (editProduct) {
      const foundproduct = productData.find(
        (o) => o.id.toString() === editProduct
      );
      
      setFormData({
        name: foundproduct.name,
        description: foundproduct.description,
        price: foundproduct.price,
        quantity: foundproduct.quantity,
        image: foundproduct.image,
        preview: "",
      });
    }
  }, [editProduct]);
  
  const router = useRouter();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newProductData = {
      id: editProduct ,
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description,
      quantity: formData.quantity,
    };

    const updatedProductData = [...productdata, newProductData];
    updateProduct(editProduct, newProductData)
    updateproductData(updatedProductData);
    router.push("/products");
  };

  const handleImageChange = () => {
    
  };

  return (
    <div className="home">
      <h2 className="name_header">Edit Products</h2>
      <div className="from_product">
        <form className="form" onSubmit={handleSubmit} action="">
          <div>
            <label htmlFor="name">Name of Product :</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="price">Product price:</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="description">Description :</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="quantity">Product Quantity :</label>
            <input
              type="text"
              name="quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="image">Product Image :</label>
            <input type="text" name="image" onChange={handleImageChange} />
          </div>
          <button type="submit">Edit Product</button>
        </form>
        <EditcardModified
          name={formData.name}
          price={formData.price}
          image={formData.image}
          description={formData.description}
        />
      </div>
    </div>
  );
}
