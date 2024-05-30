"use client";

import { useEffect, useState } from "react";
import { useParams,useRouter } from "next/navigation";
// import { productData, updateProduct } from "@app/client/data/product.data";
import { CatagoryData } from "@/data/catagoryData";
import EditcardModified_data from "@/component/EditcardModified_data/EditcardModified_data";

export default function EditProduct() {
  const { editCatagory } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    preview: "",
  });
  

  useEffect(() => {
    
    if (editCatagory) {
      const foundCatagory = CatagoryData.find(
        (o) => o.id.toString() === editCatagory
      );
      
      setFormData({
        name: foundCatagory.name,
        description: foundCatagory.description,
        image: foundCatagory.image,
        preview: "",
      });
    }
  }, [editCatagory]);
  
  const router = useRouter();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const newCatagoryData = {
      id: editCatagory ,
      name: formData.name,
      description: formData.description,
    };

    const updatedCatagoryData = [...Catagorydata, newCatagoryData];
    updateCatagory(editCatagory, newCatagoryData)
    updateCatagoryData(updatedCatagoryData);
    router.push("/catagory");
  };

  const handleImageChange = (e) => {
   
  };

  return (
    <div className="home">
      <h2 className="name_header">Edit Catagory</h2>
      <div className="from_product">
        <form className="form" onSubmit={handleSubmit} action="">
          <div>
            <label htmlFor="name">Name of Catagory :</label>
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
          </div>
          <div>
            <label htmlFor="image">Product Image :</label>
            <input type="text" name="image" onChange={handleImageChange} />
          </div>
          <button type="submit">Edit Product</button>
        </form>
        <EditcardModified_data
          name={formData.name}
          image={formData.image}
          description={formData.description}
        />
      </div>
    </div>
  );
}
