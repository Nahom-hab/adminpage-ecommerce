"use client"

import './styles.css'
import Order from '@/component/order/order'
import { orderData } from '@/data/orderdata'

import { useState } from 'react';


export default function Orders() {
  const [Orders, setOrders] = useState(orderData);
  const [searchVal, setSearchVal] = useState("");

  function handleSearchClick() {
    if (searchVal === "") { setOrders(orderData); return; }
    const filterBySearch = orderData.filter((item) => {
        if (item.product.toLowerCase()
            .includes(searchVal.toLowerCase())) { return item; }
    })
    setOrders(filterBySearch);
}


  const orders=Orders.map((order)=>{
    return(
      <Order
          id={order.id}
          delivery={order.delivery}
          email={order.email}
          product={order.product}
          quantity={order.quantity}
          fullname={order.fullname}
      />
    )

  })
  return (
    <div className='users'>
      <div className='userheader-container'>
        <div className='search-users'>
          <label htmlFor="search">Search by Product :</label>
          <input name='search' onKeyDown={handleSearchClick} onChange={e => setSearchVal(e.target.value)} type="text" />
        </div>
      </div>
      <div className='table'>
          <div className='users_information_contatiner_light'>
             <p className='small'>Number</p>
              <p>Full Name</p>
              <p>Email Adress</p>
              <p>product name</p>
              <p className='small'>quantity</p>
              <p>delivery condition</p>
          </div>
          {orders}
    </div>
    </div>
  )
}
