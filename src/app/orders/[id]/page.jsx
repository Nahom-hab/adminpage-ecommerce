"use client";


import './styles.css'
import { useEffect, useState } from 'react';
import { orderData } from '@/data/orderdata';
import { useParams } from 'next/navigation';
import ProductForOrder from '@/component/productfororder/productforo';


export default function OrderPage(){
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
    const products=order.products.map((product)=>{
        return(
        <ProductForOrder 
            product_id={product.id}
        />)
    })


    return (
        <div className='order_detail'>
           <h2 className='name_header'>Order Detail</h2>
           <div className='order_detail_sub_container'>
                <div className='order_individual_body'>
                        <h3 className='order_num'>Order Number: <span>#{order.id}</span></h3>
                        <div className='card_item_sum'>
                            <div className='grid grid_top'>
                                <h4 className='summury'>Item Summery</h4>
                                <h4>Price</h4>
                                <h4>Quantity</h4>
                                <h4>Total Price</h4>
                            </div>
                        
                        <ul>
                            {order.products.map((product, index) => (
                                <div key={index} className='grid grid_bottum'>
                                    <h5>{product.name}</h5>
                                    <h5>{product.price} $</h5>
                                    <h5>{product.quantity}</h5>
                                    <h5>{(product.quantity*product.price).toFixed(2)} $</h5>
                                </div>
                            ))}
                        </ul>

                        </div>
                        <h2 className='title'>Customer Detail And Order</h2>
                        <div className='customer_info'>
                            <p><b>Customer Name:</b> {order.customer_name}</p>
                            <p><b>Order Date: </b>{order.order_date}</p>
                            <p><b>Total Amount: </b>{order.total_amount}</p>
                            <p><b>Status: </b>{order.status}</p>
                        </div>
                    
                    
                    </div>
                    <div className="order_products">
                        {products}
                    </div>

            </div>
                
    </div>
    );
};


