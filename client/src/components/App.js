import React, { useState } from "react";
import {BrowserRouter as Switch, Route} from "react-router-dom";
// import { Switch, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import NavBar from "./NavBar";
import DestinationsPage from "./DestinationsPage";
import Profile from "./Profile";



function App() {
  const [page, setPage] = useState("/");

  return (
      
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
            <DestinationsPage/>
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
    
  );
}

export default App;
