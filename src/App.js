import React from 'react';
import Nav from './components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import './App.css';
import Cards from './components/Cards'




const App = () => {
  
  return (

  <div>

    <Nav/>
    
    <div className='header' ><Header /></div>

    <Cards/>
    
  </div>
    

  )
  
  
}
export default App;
