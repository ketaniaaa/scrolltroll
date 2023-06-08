import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
//Page Imports
import Home from './pages/Home';
import Blog from './pages/Blog';
import Design from './pages/Design';

//Blog Imports 
import EssayBlog from './pages/blogs/BlogEssay1';

//Design Imports

import Wireframes from './pages/design/Wireframes';
import StyleGuide from './pages/design/StyleGuide';
import IXD from './pages/design/IXD';
import UXReflection2 from './pages/design/UXReflection2';

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
       

      {/* Blog Pages */}
        <Route path='/EssayBlog' element= {<EssayBlog/>}/>
        
      {/* Design Pages */}
       <Route path='/Wireframes' element= {<Wireframes/>}/>
       <Route path='/StyleGuide' element= {<StyleGuide/>}/>
       <Route path='/IXD' element= {<IXD/>}/>
       <Route path='/UXReflection2' element= {<UXReflection2/>}/>
       

      {/* Artwork Pages */}

    </Routes>
    <Footer/>
</div>
  }
}

export default App;