import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Gallery from './components/Gallery.jsx';
import Services from './components/Services';
import Home from './components/Home';
import Testimonial from './components/Testimonial';
import './components/Gallery.css';
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import img9 from './assets/img9.jpg'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const galleryImages = [
    {
      img: `${img1}`
    },
    {
      img: `${img2}`
    },
    {
      img: `${img3}`
    },
    {
      img: `${img4}`
    },
    {
      img: `${img5}`
    },
    {
      img: `${img6}`
    },
    {
      img: `${img7}`
    },
    {
      img: `${img8}`
    },
    {
      img: `${img9}`
    }
  ]
  return (
    <>
     <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/services" element={ <Services/>}/>
          <Route exact path="/gallery" element={<Gallery
          galleryImages={galleryImages}
        />}/> 
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/testimonial" element={<Testimonial/>}/> 
        </Routes>

        <Footer />
      
      </Router>
    </>
  );
}

export default App;
