"use client"
import User from '@/component/user/user'
import { UserData } from '@/data/userdata'
import { useState } from 'react';
import Link from 'next/link';
import styles from './users.module.css'


export default function Users() {
    const [Users, setUsers] = useState(UserData);
    const [searchVal, setSearchVal] = useState("");


    function handleSearchClick() {
      if (searchVal === "") { setUsers(UserData); return; }
      const filterBySearch = UserData.filter((item) => {
          if (item.fullname.toLowerCase()
              .includes(searchVal.toLowerCase())) { return item; }
      })
      setUsers(filterBySearch);
  }

  const users=Users.map((user)=>{
    return(
      <User
          id={user.id}
          image={'admin_profile.png'}
          username={user.username}
          phone={user.phone}
          email={user.email}
          totalspending={user.totalspending}
          fullname={user.fullname}
      />
    )

  })
  return (
    <div>
    <h2 className={styles.name_header}>View Users</h2>
    <div className={styles.users_table}>
      <div className={styles.userheader_container}>   
        <div className={styles.search_users}>
          <label htmlFor="users">Search by Name :</label>
          <input name='users' type="text" onKeyDown={handleSearchClick} onChange={e => setSearchVal(e.target.value)} />
        </div>
        <Link href='/users/addUser' ><div>ADD USERS</div></Link>
      </div>
      <div className={styles.table}>
          <div className={styles.users_information_contatiner_light}>
              <p className='small'>user</p>
              <p>User Name</p>
              <p>Full Name</p>
              <p>Email Adress</p>
              <p>Total Spending</p>
          </div>
          {users}
    </div>
    </div>
    </div>
  )
}
