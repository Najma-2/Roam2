import React, { useState } from "react";
import {BrowserRouter as Switch, Route} from "react-router-dom";
// import { Switch, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import DestinationsPage from "./DestinationsPage";
import Profile from "./Profile";
import dots from './dots.png'
import dots2 from './dots2.png'
import MapImg from './MapImg.png'


function Home(){


    const [page, setPage] = useState("/");

    return (

      <div>
      <div> <img className='dots' src={dots} alt="Dots" /></div>
      <div> <img className='MapImg' src={MapImg} alt="MapImg" /></div>
      <div> <img className='dots2' src={dots2} alt="Dots2" /></div>
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

export default Home