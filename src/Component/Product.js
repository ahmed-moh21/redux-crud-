import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./rtk/reduxSlice";
import { addproduct } from "./rtk/CartSlice";

function Product() {
  //useSelector of product from fetch  function  with him dispatch
  const products = useSelector((state) => state.productCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <Row>
        {products.map((item) => (
          <Col key={item.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>{item.price}</Card.Title>
                <Card.Text id="cart-des">{item.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => dispatch(addproduct(item))}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Product;
