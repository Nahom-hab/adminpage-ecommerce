"use client"
import User from '@/component/user/user'
import { UserData } from '@/data/userdata'
import { useState } from 'react';


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
    <h2 className='name_header'>View Users</h2>
    <div className='users_table'>
      <div className='userheader-container'>
     
        <div className='search-users'>
          <label htmlFor="users">Search by Name :</label>
          <input name='users' type="text" onKeyDown={handleSearchClick} onChange={e => setSearchVal(e.target.value)} />
        </div>
      </div>
      <div className='table'>
          <div className=' users_information_contatiner_light'>
              <p className='small'>Number</p>
              <p>User Name</p>
              <p>Full Name</p>
              <p>Email Adress</p>
              <p>Phone Number</p>
              <p>Total Spending</p>
          </div>
          {users}
    </div>
    </div>
    </div>
  )
}
