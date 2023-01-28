import React, { useState } from "react";
import Logo from './Logo.png'
import LandingPage from "./LandingPage";



function App() {
  const [page, setPage] = useState("/");


  return (
    <div>
       <div> <img className='logo' src={Logo} alt="Logo" /></div>
    <div>
     <LandingPage/>
    </div>
    </div>
  );
}

export default App;
