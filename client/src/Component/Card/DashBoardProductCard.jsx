import React, { useContext,useState } from 'react';
import {Link} from 'react-router-dom'
import { productContext } from '../../Services/Context/ContextAPI';
import { deleteProduct,updateProduct, } from '../../Services/Router/API/allAPI';

function DashBoardProductCard( props) {
const {product ,setProduct,sellerId} = useContext(productContext)
const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

const [isEditing , setIsEditing] = useState(false);
const [editedProduct,setEditedProduct]=useState(props.product)

function handleInputChange(e) {
  setEditedProduct((prevProduct)=>({...prevProduct, [e.target.name] :e.target.value}))
}

console.log(props.product.productId)

  const  deleteProducts = async (e)=>{
    const updatedCart = product.filter((products) => products.productId !== props.product.productId);
    setProduct(updatedCart);
    e.preventDefault()

    const productIds = props.product.productId

    try{
      const response = await deleteProduct(sellerId,productIds)
      console.log(response)
      setSuccessMessage("Deletion Sucess");
      setErrorMessage('');
      
    }catch (error) {
      console.error(error);
      
      setErrorMessage('Deleyion failed');
      setSuccessMessage('');
      
    }


  }

    const handleSaveChanges = async(e) => {
      const updatedProducts = product.map((p) =>
        p.id === editedProduct.id ? { ...p, ...editedProduct } : p
      );
      setProduct(updatedProducts);
      setIsEditing(false);
        e.preventDefault();

        try{
          const response = await updateProduct(updatedProducts,sellerId,props.product.productId)
          console.log(response)
          setSuccessMessage("update Success");
      setErrorMessage('');
        }catch (error) {
      console.error(error);
  
      setErrorMessage('Update failed');
      setSuccessMessage('');
      
    }


    };
  
    const handleCancelEdit = () => {
      setEditedProduct({ ...props.product });
      setIsEditing(false);
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setEditedProduct({ ...editedProduct, imageUrls: reader.result });
        };
        reader.readAsDataURL(file);
      }
    };

  return (
    <div className='container-fluid border m-3'>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <h2>Title</h2>
          {
            isEditing ?(
              <input type='text' name='title' value={editedProduct.title} onChange={handleInputChange}/>) : (<p>{props.product.title}</p>
            )
          }
          <h3>Price of product</h3>
          {
            isEditing ?(
              <input type='text' name='price' value={editedProduct.price} onChange={handleInputChange}/>) : (<p>{props.product.price}</p>
            )
          }
              {
            isEditing ?(
              <input type='text' name='price' value={editedProduct.categorey} onChange={handleInputChange}/>) : (<p>{props.product.categorey}</p>
            )
          }
        </div>
        <div className="col-md-6 p-2">
        {isEditing ? (
    <>
      <label htmlFor="editImage" className="form-label me-2">
        Upload the image
      </label>
      <input
        type="file"
        className="form-control"
        id="editImage"
        onChange={handleFileUpload}
      />
      {editedProduct.image && (
        <img
          src={editedProduct.image}
          alt="Edited Image"
          style={{ maxWidth: '100%', maxHeight: '300px' }}
        />
      )}
    </>
  ) : (
    <img
      src={props.product.image}
      alt=""
      style={{ width: '50%', height: 'auto' }}
    />
  )}      </div>
      </div>
      <div>
        <div className="row p-2 border">
          <h3>Product description</h3>
          {
            isEditing ?(
              <input type='text' name='proDesc' value={editedProduct.description} onChange={handleInputChange}/>) : (<p>{props.product.description}</p>
            )
          }
        </div>
        <div className='row p-2 '>
          <div className='d-flex justify-content-between' >
          {isEditing ? (
              <>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </button>
              </>
            ) :(
              <>
            <button type="button" className="btn btn-primary"><Link to="/productform" style={{ color:'white',textDecoration:"none"}}> Add new product</Link> </button>
            <button type="button" className="btn btn-primary" onClick={() => setIsEditing(true)} >Update</button>
            <button type="button" className="btn btn-primary"onClick={deleteProducts}>Delete</button>
            </> )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardProductCard;
