import React, { useState } from "react";
import Home from "./Home";




function App() {
  const [page, setPage] = useState("/");

  return (
      
    <div>
     <Home/>
    </div>
    
  );
}

export default App;
