import React from 'react';
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import CardScreen from './screens/CardScreen'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  return (
    <Router>
    <div>
    <Header/>
    <main className='py-3'>
    <Container className='py-5'>
    
  
    <Routes>
      <Route exact path="/" element={<HomeScreen />}/>
      <Route path="/product/:id/" element={<ProductScreen />}/>
      <Route path="/cart/:id/:qty/" element={<CardScreen />}/>
    </Routes>

            
          
    
   
   
      
      </Container>
    </main>
      <Footer/>
    </div>
    </Router>  
  );
}

export default App;
