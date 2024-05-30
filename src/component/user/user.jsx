import styles from './user.module.css'

export default function User(props) {
  return (
    <div className={props.id%2===0? `${styles.users_information_contatiner_light}`:`${styles.users_information_contatiner_dark}`}>
      <img className={styles.img} src={props.image} alt="" />
      <p>{props.username}</p>
      <p>{props.fullname}</p>
      <p>{props.email}</p>
      <p>{props.totalspending}</p>
      <div className={styles.btn_users_info}>
        <button className='view'>VIEW HISTORY</button>
        <button className='delete'>DELETE</button>
      </div>
    </div>
  )
}
