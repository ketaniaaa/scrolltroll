import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
//Page Imports
import Home from './pages/Home';
import Blog from './pages/Blog';
import Design from './pages/Design';


//Design Imports
import EssayBlog from './pages/blogs/BlogEssay1';


//Component Imports 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
class App extends Component {
  render(){
    return <div className='App'>
    <Navbar/>
    <Routes>
      <Route exact path='/' element= {<Home/>}/>


      {/* Main Pages */}
       <Route path='/BlogSelection' element= {<Blog/>}/>
        <Route path='/DesignSelection' element= {<Design/>}/>
         <Route path='/EssayBlog' element= {<EssayBlog/>}/>

      {/* Blog Pages */}
      {/* Design Pages */}
      {/* Artwork Pages */}

    </Routes>
    <Footer/>
</div>
  }
}

export default App;