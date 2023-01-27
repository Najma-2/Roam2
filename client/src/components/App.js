import React, { useState } from "react";
import LandingPage from "./LandingPage";
import Logo from './Logo.png'

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
