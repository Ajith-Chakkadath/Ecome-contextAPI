import React from 'react'

function CategoryCard(props) {
    console.log("calling cateogty")
  return (
   <>
   {/* <div className='btn-group-vertical' aria-label="Basic checkbox Vertical toggle button group"> */}
     <input type="checkbox" class="btn-check" id={props.data} autocomplete="off" />
<label class="btn btn-outline-primary m-2" for={props.data}>{props.data}</label>
 {/* </div> */}

   </>
  )
}

export default CategoryCard