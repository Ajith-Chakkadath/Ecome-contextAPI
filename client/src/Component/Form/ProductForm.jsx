import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import uuid for generating unique IDs
import { productContext } from '../../Services/Context/ContextAPI';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../Services/Router/API/allAPI';

function ProductForm() {
  const [imageUrl, setImageUrl] = useState('');
  const { product , setProduct ,sellerId } = useContext(productContext);
  const navigate = useNavigate()
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    image: '',
    category : '',
    description: '',
  });

  const handleAddProduct = async (e) => {

    // Generate a unique ID for the new product
    const newProductWithId = {
      productId: uuidv4(),
      title: newProduct.title,
      price: newProduct.price,
      category : newProduct.category,
      image: imageUrl,
      description: newProduct.description,
      sellerId : sellerId
    };
console.log(newProductWithId)
    e.preventDefault();
    try{
      
      const response=await addProduct(newProductWithId,sellerId)
      console.log(response)
      setSuccessMessage("Product added  Success");
      setErrorMessage('');

    } catch (error) {
      console.error(error);
      setErrorMessage('Product add failed');
      setSuccessMessage('');
      
    }
    setProduct([...product, newProductWithId]);
    setNewProduct({
      title: '',
      price: '',
      image: '',
      category: '',
      description: '',
    });
    navigate('/dashboard')
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='container-fluid m-3 border'>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
        <input
          type="number"
          className="form-control"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
      </div>
      <div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
  <input
    type="text"
    className="form-control"
    value={newProduct.category}  // Corrected variable name from categorey to category
    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
  />
</div>
      <div className="row d-flex align-items-center">
        <div className="col">
          <div className="input-group mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label me-2">Upload the image</label>
            <input type="file" className="form-control" onChange={handleFileUpload} />
          </div>
        </div>
        <div className="col">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Uploaded Image"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
          )}
        </div>
      </div>
      <div>
        <label htmlFor="exampleInputPassword1" className="form-label">Product description</label>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
          />
          <label htmlFor="floatingTextarea2">Product Description</label>
        </div>
      </div>
      <button type="button" className="btn btn-primary m-2" onClick={handleAddProduct}>Save</button>
    </div>
  );
}

export default ProductForm;
