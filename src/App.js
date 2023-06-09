import React, {Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './App.css';
//Page Imports
import Home from './pages/Home';
import Blog from './pages/Blog';
import Design from './pages/Design';
import SiteMap from './pages/SiteMap';

//Form Imports
import NameForm from './pages/forms/NameForm';
import Country from './pages/forms/Country';
import Password from './pages/forms/Password';
import Submit from './pages/forms/Submit';
import Post from './pages/forms/Post';
import More from './pages/forms/More';


//Blog Imports 
import EssayBlog from './pages/blogs/BlogEssay1';
import Reflection2 from './pages/blogs/Reflection2';
import AfricanArt from './pages/blogs/AfricanArt';
import Autocorrectbias from './pages/blogs/Autocorrectbias';
import PrepBlog from './pages/blogs/PrepBlog';
import AiArt from './pages/blogs/AiArt';
import ExamRationale from './pages/blogs/ExamRationale';
import DevBlog from './pages/blogs/DevBlog';
import ExamReflection from './pages/blogs/ExamReflection';


//Design Imports

import Wireframes from './pages/design/Wireframes';
import StyleGuide from './pages/design/StyleGuide';
import IXD from './pages/design/IXD';
import UXReflection2 from './pages/design/UXReflection2';
import UXReflection3 from './pages/design/UXReflection3';

//Component Imports 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
class App extends Component {
  render(){
    return (
      <div className="App">
        <Helmet>
          {/* SEO meta data since react does not hold interent capability for meta tags without the Helmet package */}
          <title> Scroll Troll</title>
          <meta name="author" content="Ketania Govender" />
          <meta
            name="description"
            content="A parody social media which aims to depict bad UI design"
          />

          <meta property="og:site_name" content="Scroll Troll" />
          <meta property="og:title" content="Scroll Troll" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://github.com/ketaniaaa/scrolltroll/src/images/navLogo.png"
          />
          <meta property="og:image:alt" content="Scroll Troll Logo" />
          <meta
            property="og:url"
            content="https://ketaniaaa.github.io/scrolltroll/"
          />
          <meta
            name="keywords"
            content="Blog, Africa Digital Art, AI Art, Interactive Media, Digital Art Theory, Ux, UI ,ixd, wireframes, style guide"
          />
        </Helmet>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/* Main Pages */}
          <Route path="/BlogSelection" element={<Blog />} />
          <Route path="/DesignSelection" element={<Design />} />
          <Route path="/SiteMap" element={<SiteMap />} />

          {/* Blog Pages */}
          <Route path="/EssayBlog" element={<EssayBlog />} />
          <Route path="/AiArt" element={<AiArt />} />
          <Route path="/PrepBlog" element={<PrepBlog />} />
          <Route path="/AfricanArt" element={<AfricanArt />} />
          <Route path="/AutocorrectBias" element={<Autocorrectbias />} />
          <Route path="/Reflection2" element={<Reflection2 />} />
           <Route path="/ExamRationale" element={<ExamRationale />} />
          <Route path="/DevBlog" element={<DevBlog />} />
          <Route path="/ExamReflection" element={<ExamReflection />} />

          {/* Design Pages */}
          <Route path="/Wireframes" element={<Wireframes />} />
          <Route path="/StyleGuide" element={<StyleGuide />} />
          <Route path="/IXD" element={<IXD />} />
          <Route path="/UXReflection2" element={<UXReflection2 />} />
               <Route path="/UXReflection3" element={<UXReflection3 />} />

          {/* Artwork Pages */}
          <Route path="/NameForm" element={<NameForm />} />
          <Route path="/Country" element={<Country />} />
          <Route path="/Password" element={<Password />} />
          <Route path="/Submit" element={<Submit />} />
          <Route path="/Post" element={<Post />} />
           <Route path="/More" element={<More />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;