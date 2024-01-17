import React from 'react';

function DashBoardProductCard( props) {
  return (
    <div className='container-fluid border m-3'>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <h2>Title</h2>
          <p>{props.product.title}</p>
          <h3>Price of product</h3>
          <p>{props.product.price}</p>
        </div>
        <div className="col-md-6 p-2">
          <img src={props.product.image} alt="" style={{ width: "50%", height:"auto"}} />
        </div>
      </div>
      <div>
        <div className="row p-2 border">
          <h3>Product description</h3>
          <p>
                {props.product.description}      
                      </p>
        </div>
        <div className='row p-2 '>
          <div className='d-flex justify-content-between' >
            <button type="button" className="btn btn-primary">Add new product</button>
            <button type="button" className="btn btn-primary">Update</button>
            <button type="button" className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardProductCard;
