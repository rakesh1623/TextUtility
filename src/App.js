//import logo from './logo.svg';
import './App.css';
import './navbar.css'
import Navbar from './components/navbar';
import Basicform from './components/basicform';
import React ,{useState} from 'react'
//import React , {useSate} from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#171d20';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
   <Navbar mode={mode} toggleMode={toggleMode} />
   <div className="container">
    <Basicform mode={mode} heading="Enter your text below"/>
   </div>
   </>
  );
}

export default App;
