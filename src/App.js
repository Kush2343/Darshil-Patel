import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Project from './Components/Project/Project';
import Conatct from './Components/Conatact/Conatct';
import Header from './Components/Navbar/Navber';
import Footer from './Components/Footer/Footer';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <div className='bg'>
    <>
<BrowserRouter>
    <Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/resume' element={<Resume/>}/>
  <Route path='/projects' element={<Project/>}/>
  <Route path='/contact' element={<Conatct/>}/>
</Routes>
<Footer/>
</BrowserRouter>
</>
</div>
  );
}

export default App;
