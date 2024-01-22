import React, { useContext,useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { productContext } from "../../Services/Context/ContextAPI";
import { Link } from "react-router-dom";
import { userCartAdd } from "../../Services/Router/API/allAPI";


function ProductCard(props) {
  const contextValues = useContext(productContext);
  const { setCartProducts, setDetailsProducts, userId } = contextValues;
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  function knowProduct() {
    setDetailsProducts(props.data);
  }

const addToCart = async(e)=> {

    setCartProducts((prevCartlist) => [...prevCartlist, props.data]);

    const reqBody = {
      sellerId: props.data.sellerId,
      productId: props.data.productId
    };
    console.log(props.data)
    console.log(userId)
  
    try {

      const response = await userCartAdd(reqBody ,userId)
      console.log(response)
      setSuccessMessage("Product added  Success");
      setErrorMessage('');
      
    } catch (error) {
      console.error(error);
      setErrorMessage('Product add failed');
      setSuccessMessage('');
    }

  }

  return (
    <Card style={{ width: "20rem", height: "28rem" }} className="m-3 p-3">
      <Card.Img
        variant="top"
        src={props.data.image}
        style={{ width: "10rem", height: "10rem" }}
        className="rounded mx-auto"
      />
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>
          Price <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
          {props.data.price}
        </Card.Text>
        <Card.Text>{props.data.category}</Card.Text>
        <Button className="m-2" variant="primary">
          <Link
            to="/details"
            style={{ color: "white", textDecoration: "none" }}
            onClick={knowProduct}
          >
            Know more
          </Link>
        </Button>
        <Button className="m-2" variant="primary" onClick={addToCart}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
