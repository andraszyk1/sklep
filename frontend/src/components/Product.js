import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import {Link} from "react-router-dom";



function Product({product}) {

  return (
    
    <Card className='my-3 py-2 px-2 rounded'>
        <Link className='text-link' to={`product/${product._id}`}>
            <Card.Img  src={product.image}/>
        </Link>
        
        <Card.Body>
            <Link className='text-link' to={`/product/${product._id}`}>
            <Card.Title as="div">
                <strong>{product.name}</strong>
            </Card.Title>
            </Link>
            <Card.Text as="div">
                <div className='my-3'>
                    <Rating value={product.rating} text={`${product.numReviews} Opinie`} color={'#f8e825'}/>
                </div>
            </Card.Text>
            <Card.Text as='h3'>
                {product.price} zł
            </Card.Text>
        </Card.Body>

    </Card>
   
  )
  }


export default Product
