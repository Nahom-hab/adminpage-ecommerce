export default function EditcardModified(props) {
    return (
      <div className='editcard padding10'> 
           <img className="view" src={props.image} alt="" />
           <div className='editcard_discriptions'>  
              <h3>Name: {props.name}</h3>
              <p><span>Price : </span>{props.price} $</p>
              <p className="disc"><b>Description :</b> {props.description}</p>
          </div>
      </div>
    )
  }
  