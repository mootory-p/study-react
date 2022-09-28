/*eslint-disable*/


import { useState } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Study from './components/study/Study';
import Footer from './components/footer/Footer';

function App() {
	

  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Contact />
      <Study />
      <Footer />

    </div>
  );
}






export default App;
