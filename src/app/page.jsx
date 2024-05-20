import React from 'react'
import OrdersBarChart from '@/component/chart/BarChart'
import OrdersCategoryPieChart from '@/component/chart/piechrt'
import ChartComponent from '@/component/chart/lineChart'
import { orderData } from '@/data/orderdata';
import { UserData } from '@/data/userdata';
import Total from '@/component/total/total';
 

export default function page() {
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
        <div className='barchart'>
          <OrdersBarChart   orders={orderData}/>
          </div>
          
          <div className='piechart'>
            <OrdersCategoryPieChart orderData={orderData} />
          </div>
     </div>
     
      <div className='linechart' >
       <ChartComponent userData={UserData} />
      </div>
     
      </div>
      
      
    </div>
  )
}
