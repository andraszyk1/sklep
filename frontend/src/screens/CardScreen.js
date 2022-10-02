import React, {useEffect } from 'react'
import {Link, useParams,useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Col,Row,ListGroup,Image,Button,Card, ListGroupItem} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Message from '../components/Message'
import { addToCart,removeFromCard } from '../actions/cartActions'

function CardScreen() {
    const {id,qty}=useParams()
    const navigate = useNavigate();
    const productId=id
    const dispatch=useDispatch()
    const cart=useSelector(state => state.cart)
    const {cartItems}=cart
 
    useEffect(()=>{
      if(productId){
        dispatch(addToCart(productId,qty))
      }
    },[dispatch,productId,qty])

const removeFromCartHandler=(id)=>{
    console.log('remove',id)
    dispatch(removeFromCard(id))
}
const checkoutHandler=()=>{
  navigate('/login/redirect=shipping')
}

  return (
    <div>
    <Row>
      <Col md={8}>
        <h1>Koszyk</h1>
        {cartItems.length===0 ?(
          <Message>
            Twój Koszyk jest pusty <Link to="/" className='btn btn-dark mx-2'>Powrót</Link>
          </Message>
        ):(
          <ListGroup variant="flush">
            {cartItems.map(item=>(
              <ListGroupItem key={item.product}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded/>
                </Col>
                <Col md={3}>
                  <Link className='text-link' to={`/product/${item.product}`}>{item.name}</Link>
                </Col>
                <Col md={2}>
                  {item.price}
                </Col>
                <Col md={3}>
                <Form>
                <Form.Group>
                <Form.Control 
                          as="select"
                          value={item.qty} 
                          onChange={(e)=>dispatch(addToCart(item.product,Number(e.target.value)))}
                          >
                          {
                            [...Array(item.countInStock).keys()].map((x)=>
                            <option key={x+1} value={x+1}>{x+1}</option>
                            )
                          }
                        </Form.Control>
                        </Form.Group>      
                  </Form>       
                </Col>
                <Col md={1}>
                  <Button type='button'
                  variant='light'
                  onClick={()=>removeFromCartHandler(item.product)}
                  >
                  <i className='fas fa-trash'></i>
                  </Button>
                </Col>
              </Row>

              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>

        <Card>
          <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>Razem : 
                {/* {cartItems.reduce((acc,item)=>acc+Number(item.qty),0)} m2 */}
                  {cartItems.reduce((acc,item)=>acc+item.qty*item.price,0)} zł</h3>
              </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <Button 
            type='button'
            className='btn-block'
            onClick={checkoutHandler} 
            disabled={cartItems.length===0}>
              Przejdź do zamówienia
            </Button>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    </div>
  )
}

export default CardScreen