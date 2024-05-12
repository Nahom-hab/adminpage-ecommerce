import './styles.css'

export default function Editcard(props) {
  return (
    <div className='editcard'> 
         <img src={props.image} alt="" />
         <div className='editcard_discriptions'>  
            <h3>Name: {props.name}</h3>
            <p><span>Price : </span>{props.price}$</p>
        </div>
         <div className='editcard-btn-container'>
            <button className='edit-btn'>EDIT</button>
            <button className='delete-btn'>DELETE</button>
         </div>

    </div>
  )
}
