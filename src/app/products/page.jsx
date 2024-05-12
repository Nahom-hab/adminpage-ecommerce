import { productData } from '@/data/productdata'
import './styles.css'
import Editcard from '@/component/editCard/editcard'
import Link from 'next/link'
export default function Product() {

  const products=productData.map((product)=>{
    return(
      <Editcard
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
      />
    )
  })

  return (
    <div className='products'>
      <div className='add_products'>
        <Link href='/products/addProduct'>
          <div className='add'>+</div>
        </Link>
      </div>
      {products}
      
    </div>
  )
}
