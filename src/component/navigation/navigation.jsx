

import './styles.css'
import Link from "next/link"
export default function Navigation() {
  return (
    <div className='navigation'>
      <div className='admin_top'>
        <img className='admin_img' src="admin_profile.png" alt="" />
        <div>
          <h4>Admin</h4>
          <p>Admin page</p>
        </div>
      </div>

        <nav>
            <Link href='/'>Dashboard</Link>
            <Link href='/products'>Edit Products</Link>
            <Link href={'/catagory'}>Edit Catagory</Link>
            <Link href='/users'>View Users</Link>
            <Link href='/orders'>View orders</Link>
      </nav>   
</div>
 
  )
}

