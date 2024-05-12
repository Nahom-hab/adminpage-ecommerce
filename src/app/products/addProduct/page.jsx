import './styles.css'

export default function AddProduct() {
  return (
    <div className='from_product'>
        <form action="">
            <div >
                <label htmlFor="name">Name of Product :</label>
                <input type="text" name='name' /></div>
            <div>   
                <label htmlFor="discription">Product discription :</label>
                <input type="text" name='discription' /></div>
            <div> 
                <label htmlFor="prize">Product prize:</label>
                <input type="text" name='prize' /></div>
            <div>    
                <label htmlFor="quantity">Product Quantity :</label>
                <input type="text" name='quantity' />
            </div>
            <div>    
                <label htmlFor="image">Product Image :</label>
                <input type="file" name='image' />
            </div>
         
           
        
            <button type='submit'>Add Product</button>

        </form>
    </div>
  )
}
