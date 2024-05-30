"use client"

import styles from './styles.module.css'
import Link from 'next/link'
import CatagoryCard from '@/component/catagorycard/catagoryCard'
import DataContext from '@/component/globalcontext/DataContext'
import { useContext } from 'react'



export default function Catagory() {

  const { categoryData } = useContext(DataContext);

  const products=categoryData.map((catagory)=>{
    return(
      <CatagoryCard
        id={catagory.id}
        image={catagory.image}
        name={catagory.name}
        discription={catagory.description}
      />
    )
  })


  return (
    <div>
        <h2 className={styles.name_header}>Edit Catagory</h2>
    <div className={styles.products}>
      <div className={styles.add_products}>
      <Link  href='/catagory/addCatagory'>
          <div className={styles.add}>+</div>
        </Link>
      </div>
      {products}
      
    </div>
    </div>
  
  )
}
