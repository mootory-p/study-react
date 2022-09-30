/*eslint-disable*/
import { useState, React } from 'react';
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import TopNav from './components/topnav/TopNav';
import Information from './pages/Information';
import Main from './pages/Main';
import Product from './pages/Product';


function App() {
	

  return (
    <div className='App'>
      
      
      <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/information" element={<Information />} />
        
      </Routes>
    </BrowserRouter>
      

    </div>
    
  
    
  );
}


export default App;
