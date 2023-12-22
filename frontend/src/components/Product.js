import React from "react";
import { Card } from "react-bootstrap";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text>
          <div>
            {product.rating}/10 from {product.numReviews} Reviews
          </div>
        </Card.Text>
        <Card.Text as="h3">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
