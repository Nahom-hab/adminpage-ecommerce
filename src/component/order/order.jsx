import './styles.css'

export default function Order(props) {
  return (
    <div className={props.id%2===0?'users_information_contatiner_light':'users_information_contatiner_dark'}>
    <p className='small'>{props.id}</p>
    <p>{props.fullname}</p>
    <p>{props.email}</p>
    <p>{props.product}</p>
    <p className='small'>{props.quantity}</p>
    <p className={props.delivery?'delivery_deliverd':'delivery_pending'}>{props.delivery?'deliverd':'pending...'}</p>
  </div>
  )
}
