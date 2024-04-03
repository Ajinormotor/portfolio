
import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Routs from './Routs/Routs';








function App() {


  useEffect(()=>{
    AOS.init()
  },[])
  
  return <>
<Header />
<Routs  />
<Footer  />
  </>
}

export default App;
