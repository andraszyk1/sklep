import React from 'react'
import {Container,Navbar,Nav} from 'react-bootstrap'

function Header() {
  return (
    <header>
        <Navbar bg="dark" variant='dark' collapseOnSelect vexpand="lg">
      <Container>
        <Navbar.Brand href='/'>Sklep-Tkaniny</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/cart/id/qty/'><i className='fas fa-shopping-cart'></i>Koszyk</Nav.Link>
            <Nav.Link href='/login/'><i className="fas fa-user"></i>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
        
    
    </header>

  )
}

export default Header