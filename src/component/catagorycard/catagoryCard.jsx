import './catagory.css'

export default function CatagoryCard(props) {
  return (
    <div className='catagory_editcard'> 
      <img src={props.image} alt="" />
      <div className='editcard_discriptions'>  
        <h3>Catagory: {props.name}</h3>
    </div>
      <div className='editcard-btn-container'>
        <button className='edit-btn'>EDIT </button>
        <button className='delete-btn'>DELETE</button>
      </div>

  </div>
  )
}
