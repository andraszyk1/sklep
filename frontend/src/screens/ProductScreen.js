import React, { useState,useEffect } from 'react'
import {Row,Col,Image,ListGroup,Button,Card,Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import {Link, useParams,useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {listProductDetails} from '../actions/productActions'
import Loader from  '../components/Loader'
import Message from  '../components/Message'

function ProductScreen() {
  const [qty,setQty]=useState(1);
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const productDetails=useSelector(state=>state.productDetails)
  const {loading,error,product}=productDetails
  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch,id])

  const addToCartHandler=()=>{
    navigate(`/cart/${id}/${qty}`)
  }

  return (

    <div>
    <Link to='/' className='btn btn-light my-3'>Wróć</Link>
    {loading ? <Loader/>
          : error ? <Message variant='danger'>{error}</Message>
          :<Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
        <Card border='light'>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} Opinie`} color={'#f8e825'}/>
            </ListGroup.Item>
            <ListGroup.Item>
              Cena : {product.price} zł
            </ListGroup.Item>
            <ListGroup.Item>
              Opis : {product.description}
            </ListGroup.Item>
          </ListGroup>
          </Card>
        </Col>
        <Col md={3}>
          <Card border='light'>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Cena
                  </Col>
                  <Col>
                    <strong>{product.price} zł</strong>
                  </Col>
                </Row>  
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col><strong>{product.countInStock>0 ? 'Dostępny' : 'Niedostępny'}</strong></Col>
                </Row>
              </ListGroup.Item>
             
              {product.countInStock>0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>
                      Ilość
                    </Col>
                    <Col xs="auto" className='my-1'>
                        <Form.Control 
                          as="select"
                          value={qty} 
                          onChange={(e)=>setQty(e.target.value)}
                          >
                          {
                            [...Array(product.countInStock).keys()].map((x)=>
                            <option key={x+1} value={x+1}>{x+1}</option>
                            )
                          }
                        </Form.Control>
                    </Col>
                   
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Row>
                  <Button 
                  onClick={addToCartHandler}
                  className='btn-block' 
                  disabled={product.countInStock===0}>
                  Dodaj do Koszyka
                  </Button>
                </Row>
              </ListGroup.Item>
           
            </ListGroup>
          </Card>
        </Col>
      </Row>}
    
    </div>
  )
}

export default ProductScreen