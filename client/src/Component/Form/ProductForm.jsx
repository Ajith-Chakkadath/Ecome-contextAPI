import React, { useState } from 'react';

function ProductForm({ onSave }) {
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
  
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
  
    const handleSave = () => {
      const productData = {
        imageUrl,
        title,
        price,
        description,
      };
  
      onSave(productData);
    };
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
      };
    
      const handlePriceChange = (event) => {
        setPrice(event.target.value);
      };
    
      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };
  return (
    <div className='container-fluid m-3 border'>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
      <input
        type="text"
        className="form-control"
        value={title}
        onChange={handleTitleChange}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
      <input
        type="number"
        className="form-control"
       
        value={price}
        onChange={handlePriceChange}
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
            onChange={handleDescriptionChange}
            value={description}
          />
          <label htmlFor="floatingTextarea2">Product Description</label>
        </div>
      </div>
      <button type="button" className="btn btn-primary m-2" onClick={handleSave}>Save</button>
    </div>
  );
}

export default ProductForm;
