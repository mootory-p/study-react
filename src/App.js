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
      <TopNav />
      
      {/* <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page1/*" element={<Page1 />} />
        <Route path="/page2/*" element={<Page2 />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter> */}
      

    </div>
    
  
    
  );
}


export default App;
