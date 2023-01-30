import React, { useEffect, useState } from 'react'
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import DestinationsPage from "./components/DestinationsPage";
import Profile from "./components/Profile";
import LandingPage from './components/LandingPage';



function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
      fetch("/profile").then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            setUser(user)
          });
        }
      });
    }, [])

  return (
    <div className="App">
      <div>
       
      <div className='nav'><NavBar /></div>
      </div>
      <Routes>
        <Route exact path='/' element={<div className="landing-page"><LandingPage /></div>} />
        <Route exact path="/destinations" element={<DestinationsPage />} />
        <Route exact path="profile" element={<Profile  />} />
      </Routes>
    </div>
  );
}


export default App;












// // const [destinations, setDestinations] = useState([]);
// // const [error, setError] = useState('');
// // const [attractions, setAttractions] = useState([])
// // const [user, setUser] = useState(null)
// // const [page, setPage] = useState('/')


// // useEffect(() => {
// //   fetch("/user").then((response) => {
// //     if (response.ok) {
// //       response.json().then((user) => {
// //         setUser(user)
// //       });
// //     }
// //   });
// // }, []);

// // useEffect(() => {
// //   fetch("/destinations")
// //     .then((res) => {
// //       if (res.ok) {
// //         res.json().then(data => {
// //           setDestinations(data);
// //         })
// //       } else {
// //         res.json().then(data => setError(data.error))
// //       }
// //     })
// // }, []);

// // useEffect(() => {
// //   fetch("/attractions")
// //     .then((res) => {
// //       if (res.ok) {
// //         res.json().then(data => {
// //           setAttractions(data);
// //         })
// //       } else {
// //         res.json().then(data => setError(data.error))
// //       }
// //     })
// // }, []);

// function handleLogin(){
//   setUser(user)
// }