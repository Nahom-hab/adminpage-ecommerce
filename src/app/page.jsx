import React from 'react'
// import OrdersBarChart from '@/component/chart/BarChart'
import OrdersCategoryPieChart from '@/component/chart/piechrt'
import ChartComponent from '@/component/chart/lineChart'
import { orderData } from '@/data/orderdata';
import { UserData } from '@/data/userdata';
import Total from '@/component/total/total';
import OrderRecent from '@/component/recentorder/orderRecent';

 

export default function page() {
  const recent_orders=orderData.slice(0,5).map((order)=>{
    return(
        <OrderRecent
          email={order.email}
          customer_name={order.customer_name}
          order_id={order.id}
          total_amount={order.total_amount}
          order_date={order.order_date}
          status={order.status}
        />
    )
  })




  return (
    <div className='home'>
      <h2 className='name_header'>Dashboard</h2>
      <div className='home_info'>
      <div className='totals'>
        <Total total={1000}
                img='sale.svg'
                type='Sale' />
          <Total total={1000}
                img='revenu.svg'
                type='Revenue' />
          <Total total={1000}
                img='profit.svg'
                type='Profit' />
          <Total total={1000}
                img='user.svg'
                type='Users' />
      </div>
      <div className='bar_pie_container'>
        {/* <div className='barchart'>
          <OrdersBarChart   orders={orderData}/>
        </div>
           */}
          <div className='piechart'>
            <OrdersCategoryPieChart orderData={orderData} />
          </div>
        <div className='linechart' >
            <ChartComponent userData={UserData} />
        </div>
     
      </div>

     </div>
     <div className='recent_orderss'>
          <div className='recent_title'>Recent Orders</div>
          <div className='recent_order'>
              <div>Order ID</div>
              <div>Customer Name</div>
              <div>Email</div>
              <div>Order Date</div>
              <div>Order Status</div>
              <div>Total Price</div>
          </div>
          {recent_orders}
     </div>
     
      
    </div>
      
 
  )
}
