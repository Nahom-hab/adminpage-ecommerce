export default function EditCatagoryModified(props) {
    return (
      <div className='editcard padding10 margion20'> 
           <img className="view" src={props.image} alt="" />
           <div className='editcard_discriptions'>  
              <h3>Name: {props.name}</h3>
              <p className="disc"><b>Description :</b> {props.description}</p>
          </div>
      </div>
    )
  }
  