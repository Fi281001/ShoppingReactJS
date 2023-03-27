
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes, Route } from 'react-router-dom';
import Producs from './component/Products';  
import About from './component/About';
import Contact from './component/Contact';
import Product from './component/Product';

function App() {
  return (
    <>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Producs/>}/>
            <Route path="/products/:id" element={<Product/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>  
      {/* <Home/>
      <Producs/> */}
    </>
  );
}

export default App;
