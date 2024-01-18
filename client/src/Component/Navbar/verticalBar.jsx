import React, { useContext } from 'react'
import { productContext } from '../../Services/Context/ContextAPI';

function VerticalBar() {
  const {productAction,setProductAction} = useContext(productContext)


  function handleChange() {
    setProductAction(!productAction);
  }
  return (
   <>
   <div className='container m-3 border p-2'>
   <button type="button" class="btn btn-primary"  onClick={handleChange}  >All product</button>

   </div>
   </>
  )
}

export default VerticalBar