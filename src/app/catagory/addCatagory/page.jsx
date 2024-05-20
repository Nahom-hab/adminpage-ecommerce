"use client";

import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import DataContext from '@/component/globalcontext/DataContext';
import EditCatagoryModified from '@/component/editcatmod/editcatagorymodifies';

export default function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: '',
        preview: ''
    });

    const router = useRouter();
    const { categoryData, updateCatagoryData } = useContext(DataContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Calculate the new ID
        const lastId = categoryData.length > 0 ? categoryData[categoryData.length - 1].id : 0;
        const newId = lastId + 1;

        const newProductData = {
            id: newId,
            name: formData.name,
            description: formData.description,
        };

        const updatedProductData = [...categoryData, newProductData];
        updateCatagoryData(updatedProductData);
        router.back();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                image: file,
                preview: URL.createObjectURL(file)
            });
        }
    };

    return (
        <div>
            <h2 className='name_header'>Add Products</h2>
            <div className='from_product'>
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <label htmlFor="name">Name of Product :</label>
                        <input type="text" name='name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                
                    <div>
                        <label htmlFor="description">Description :</label>
                        <input type="text" name='description' value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                  
                    <div>
                        <label htmlFor="image">Product Image :</label>
                        <input type="file" name='image' onChange={handleImageChange} />
                    </div>
                    <button type='submit'>Add Product</button>
                </form>
                <EditCatagoryModified 
                    name={formData.name} 
                    image={formData.preview}
                    description={formData.description}
                />
            </div>
        </div>
    );
}
