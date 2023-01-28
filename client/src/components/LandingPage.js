// import React from 'react'
import Home from './Home'
import React, { useState } from "react";
import {BrowserRouter as Switch, Route} from "react-router-dom";
// import { Switch, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import DestinationsPage from "./DestinationsPage";
import Profile from "./Profile";
// import dots from './dots.png'
// import dots2 from './dots2.png'
import MapImg from './MapImg.png'
import Spiral from './spiral.png'


function LandingPage(){


//     return(
//         <div>
//             <h1>Roam</h1>
//             <div>Login or Signup</div>
//             <h1> Top Destinations to See in 2023</h1>
//             <h4> Email:</h4>
//             <h5> roam@traveldestinations.co</h5>
//             <h4> Web</h4>
//             <h5> roam.com</h5>
//         </div>
        
//     )
// }

const [page, setPage] = useState("/");

return (

  <div>
  {/* <div> <img className='dots' src={dots} alt="Dots" /></div> */}
  <div> <img className='MapImg' src={MapImg} alt="MapImg" /></div>
  <div> <img className='spiral' src={Spiral} alt="spiral" /></div>
  {/* <div> <img className='dots2' src={dots2} alt="Dots2" /></div> */}
  <div className='bottomleft'>
  <h1 className='EMAIL'>EMAIL US</h1>
  <a href="roam@traveldestinations.co" className='email'>roam@traveldestinations.co</a>
  <h1 className='web'>WEB</h1>
  <a href="roam.com" className='website'>roam.com</a>
  </div>
  <div>
    <NavBar onChangePage={setPage} />
    <Switch>
      <Route exact path="/"
      element={
        <div>
          <Home/>
          </div>
      }>
      
      </Route>
      <Route path="/signup"element={
        <div>
          <Signup/>
          </div>
      }>
      </Route>
      <Route path="/login"element={
        <div>
          <Login/>
          </div>
      }>
      </Route>
      <Route path="/destinations"element={
        <div>
         HEllo
          </div>
      }>
      </Route>
      <Route path="/profile"element={
        <div>
          <Profile/>
          </div>
      }>
      </Route>
      <Route path="*"element={
        <h1>404 not found</h1>
      }>
    
      </Route>
    </Switch>

  </div>
  </div>
);
}

export default LandingPage