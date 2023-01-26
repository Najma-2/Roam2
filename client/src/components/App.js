import React, { useState } from "react";
import LandingPage from "./LandingPage";



function App() {
  const [page, setPage] = useState("/");
  

  return (
      
    <div>
     <LandingPage/>
    </div>
    
  );
}

export default App;
