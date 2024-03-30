import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {
  removeproduct,
  clearcart,
  downQuantityProduct,
  upQuantityProduct,
} from "./rtk/CartSlice";

function Cart() {
  //useSelector of product from fetch  function  with him dispatch
  const cartproduct = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //reduce function to customize Total price of cart product and quantity
  const totalPrice = cartproduct.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div style={{ marginTop: "5rem" }}>
      <Button
        style={{ width: "100%" }}
        variant="dark"
        onClick={() => dispatch(clearcart())}
      >
        Clear All Product
      </Button>
      <h5> Total Prise : {totalPrice.toFixed(2)}$ </h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>price</th>
            <th>Quantity</th>
            <th>up quantity</th>
            <th> down quantity</th>
            <th>option</th>
          </tr>
        </thead>
        <tbody>
          {cartproduct.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <img style={{ width: "50px" }} src={product.image} />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                {/* up Arrow */}
                <Button onClick={() => dispatch(upQuantityProduct(product))}>
                  {" "}
                  &#8593;{" "}
                </Button>
              </td>

              <td>
                <Button onClick={() => dispatch(downQuantityProduct(product))}>
                  {" "}
                  &#8595;{" "}
                </Button>
              </td>
              {/* down Arrow */}
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeproduct(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
