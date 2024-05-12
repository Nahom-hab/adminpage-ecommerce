import { CatagoryData } from '@/data/catagoryData'
import './styles.css'
import Link from 'next/link'

import CatagoryCard from '@/component/catagorycard/catagoryCard'
export default function Catagory() {
  const products=CatagoryData.map((catagory)=>{
    return(
      <CatagoryCard
        id={catagory.id}
        image={catagory.image}
        name={catagory.name}
        discription={catagory.discription}
      />
    )
  })

  return (
    <div className='products'>
      <div className='add_products'>
      <Link href='/catagory/addCatagory'>
          <div className='add'>+</div>
        </Link>
      </div>
      {products}
      
    </div>
  )
}
