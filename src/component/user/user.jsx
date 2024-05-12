

export default function User(props) {
  return (
    <div className={props.id%2===0?'users_information_contatiner_light':'users_information_contatiner_dark'}>
      <p className="small">{props.id}</p>
      <p>{props.username}</p>
      <p>{props.fullname}</p>
      <p>{props.email}</p>
      <p>{props.totalspending}</p>
      <div className='btn_users_info'>
        <button className='view'>VIEW HISTORY</button>
        <button className='delete'>DELETE</button>
      </div>
    </div>
  )
}
