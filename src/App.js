
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes, Route } from 'react-router-dom';
import Producs from './component/Producs';  
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" component={Home}/>
        <Route exact path="/producs/" component={Producs}/>
      </Routes> 

    </>
  );
}

export default App;
