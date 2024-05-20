import React from 'react'

export default function Total(Props) {
  return (
    <div className="total_elem">
        <div className='info_total'>
        <h3 className='green_money'>${Props.total}</h3>
        <h4>Total {Props.type}</h4>
        </div>
        <div>
        <img src={Props.img} alt="" />
        </div>
    </div>
  )
}
