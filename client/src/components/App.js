import React, { useState } from "react";
import Logo from './Logo.png'
import LandingPage from "./LandingPage";
import Home from './Home'


function App() {
  const [page, setPage] = useState("/");
  

  return (
    <div>
      <div> <img className='logo' src={Logo} alt="Logo" /></div>
    <div>
     <Home/>
    </div>
    </div>
  );
}

export default App;
