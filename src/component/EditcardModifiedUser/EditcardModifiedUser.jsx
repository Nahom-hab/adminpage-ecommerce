
import style from './styles.module.css'
export default function EditcardModifiedUser(props) {
    return (
      <div className={`${style.user_card_modified} ${style.padding10}`}> 
           <div className={style.img_view}><img className={style.view} src={props.image} alt="" /></div>
           <div className={style.data}>
                <p><b>Full Name: </b> {props.fullname}</p>
                <p><b>Email: </b> {props.email}</p>
                <p><b>Username: </b> {props.username}</p>
                <p><b>phone: </b>{props.phone}</p>
           </div>
      </div>
    )
  }
