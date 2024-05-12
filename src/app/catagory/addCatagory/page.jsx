
export default function addCatagory() {
  return (
    <div className='from_product'>
    <form action="">
        <div >
            <label htmlFor="name">Name of Catagory :</label>
            <input type="text" name='name' /></div>
        <div>   
            <label htmlFor="discription">discription :</label>
            <input type="text" name='discription' /></div>
     
        <div>    
            <label htmlFor="image">Catagory Image :</label>
            <input type="file" name='image' />
        </div>
        
        <button type='submit'>Add Catagory</button>

    </form>
</div>
  )
}
