"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import DataContext from "@app/client/components/admincomponent/globalcontext/DataContext";
import EditcardModifiedUser from "@/component/EditcardModifiedUser/EditcardModifiedUser";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    image: "",
    preview: "",
    username: "",
    createdAt: "",
  });

  const router = useRouter();
  // const { userdata, updateUserData } = useContext(DataContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUserData = {
      fullname: formData.fullname,
      phone: formData.phone,
      email: formData.email,
      username: formData.username,
    };

    // const updatedUserData = [...userdata, newUserData];
    // updateUserData(updatedUserData);
    router.back();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        preview: URL.createObjectURL(file),
      });
    }
  };

  return (
    <div className="home">
      <h2 className="name_header">Add Users</h2>
      <div className="from_product">
        <form onSubmit={handleSubmit} action="">
          <div>
            <label htmlFor="name">Full Name :</label>
            <input
              type="text"
              name="fullname"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, fullname: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="prize">Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="description">Phone :</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="quantity">User Name :</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="image">Profile Image :</label>
            <input type="file" name="image" onChange={handleImageChange} />
          </div>
          <button type="submit">Add User</button>
        </form>
        <EditcardModifiedUser
          fullname={formData.fullname}
          phone={formData.phone}
          image={formData.preview}
          email={formData.email}
          username={formData.username}
        />
      </div>
    </div>
  );
}
