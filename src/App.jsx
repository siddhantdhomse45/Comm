import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from "./Blogs/Hero"
// import { Home } from './Pages/Home';
import Service from './Blogs/Service';
import Category from './Blogs/Category';
import Product from './Blogs/Product';
import Blog from './Blogs/Blog';
import Newsletter from './Blogs/Newsletter'




function App() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Home /> */}
      <Service />
      <Category />
      <Product />
      <Blog />
      <Newsletter />
      <Footer />

     
    </div>
  );
}

export default App;
