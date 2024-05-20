"use client"

import './styles.css'
import Editcard from '@/component/editCard/editcard'
import Link from 'next/link'
import DataContext from '@/component/globalcontext/DataContext'
import { useContext } from 'react'



export default function Product() {

  const { productdata } = useContext(DataContext);

  const products=productdata.map((product)=>{
    return(
      <Editcard
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        description={product.description}
      />
    )
  })

  return (
    <div>
    <h2 className='name_header'>Edit Products</h2>
    <div className='products'>
      <div className='add_products'>
        <Link href='/products/addProduct'>
          <div className='add'>+</div>
        </Link>
      </div>
      {products}
      
    </div>
    </div>
  )
}
