import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home  from './pages/Home/Home';
import Services from './pages/Services/Services';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About Us/About';
import CaseStudies from './pages/Case Studies/CaseStudies';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route  element={<Layout />} >
    <Route index element={<Home />} />
    <Route path='/services' element={<Services />} />
    <Route path='/blogs' element={<Blogs />} /> 
    <Route path='/about' element={<About />} />
    <Route path='/case-studies' element={<CaseStudies />} />
    <Route path='/contact-us' element={<Contact />} />
    </Route>
    </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
