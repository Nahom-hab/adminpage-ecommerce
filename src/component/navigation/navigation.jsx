import './styles.css'
import Link from "next/link"
export default function Navigation() {
  return (
    <div className='navigation'>

        <nav>
            <Link href='/'>Home</Link>
           <Link href='/products'>Edit Products</Link>
           <Link href={'/catagory'}>Edit Catagory</Link>
            <Link href='/users'>View Users</Link>
            <Link href='/orders'>View orders</Link>
      </nav>   
</div>
 
  )
}

