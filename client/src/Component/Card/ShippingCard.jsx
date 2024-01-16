import React from 'react'

function ShippingCard() {
  return (
   <>
   <div className="container">
   <form>
       <h1>Customer Info</h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <h1>Address info</h1>
  <div className="mb-3">
    <label  className="form-label">Address line 1</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Address line 1</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
 <div className="row">
     <div className="col">
     <div className="mb-3">
    <label  className="form-label">Country </label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
     </div>
     <div className="col">
     <div className="mb-3">
    <label  className="form-label">pincode </label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
     </div>
 </div>
 

</form>
<hr class="border border-primary border-3 opacity-75"></hr>
 
<div className="row">
    <div className="col">
<p>Shipping cost</p>
<p>GST cost </p>
<p>Total Cost</p>
    </div>
    <div className="col  gap-2 d-flex justify-content-md-end">
         
  <button type="submit" className="btn btn-primary">Submit</button>
    </div>
</div>

</div>
   </>
  )
}

export default ShippingCard