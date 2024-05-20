"use client";


import { useEffect, useState } from 'react';
import { orderData } from '@/data/orderdata';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

export default function OrderPage(){
    const router = useRouter();
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        if (id) {
            const foundOrder = orderData.find((o) => o.id.toString() === id);
            setOrder(foundOrder);
        }
    }, [id]);

    if (!order) {
        return <p>Loading...</p>;
    }

    return (
        <div>
           <h2 className='name_header'>Order Detail</h2>
           <div>
           <p>Customer Name: {order.customer_name}</p>
            <p>Order Date: {order.order_date}</p>
            <p>Total Amount: {order.total_amount}</p>
            <p>Status: {order.status}</p>
            <h2>Products</h2>
            <ul>
                {order.products.map((product, index) => (
                    <li key={index}>{product.name} - {product.quantity}</li>
                ))}
            </ul>
           </div>
        </div>
    );
};


