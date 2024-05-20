"use client"

import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import DataContext from '@/component/globalcontext/DataContext';
import EditcardModified from '@/component/editcardmodified/editcardmod';


export default function AddProduct() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        prize: '',
        quantity: '',
        image: '',
        preview: ''
    });

    const router = useRouter();
    const { productdata, updateproductData } = useContext(DataContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Calculate the new ID
        const lastId = productdata.length > 0 ? productdata[productdata.length - 1].id : 0;
        const newId = lastId + 1;

        const newProductData = {
            id: newId,
            name: formData.name,
            price: formData.prize,
            description: formData.description,
            quantity: formData.quantity,
        };

        const updatedProductData = [...productdata, newProductData];
        updateproductData(updatedProductData);
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
                        <label htmlFor="prize">Product prize:</label>
                        <input type="text" name='prize' value={formData.prize} onChange={(e) => setFormData({ ...formData, prize: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="description">Description :</label>
                        <input type="text" name='description' value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="quantity">Product Quantity :</label>
                        <input type="text" name='quantity' value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="image">Product Image :</label>
                        <input type="file" name='image' onChange={handleImageChange} />
                    </div>
                    <button type='submit'>Add Product</button>
                </form>
                <EditcardModified 
                name={formData.name} 
                price={formData.prize} 
                image={formData.preview}
                description={formData.description}
                 />
            </div>
        </div>
    );
}
