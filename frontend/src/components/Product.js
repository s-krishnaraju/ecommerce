import React from 'react'
import { Card } from 'react-bootstrap'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
       {product.name}
       <img src = "images\airpods.jpg"></img>
      </a>
    </Card>
  )
}

export default Product