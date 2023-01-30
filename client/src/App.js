import React, { useEffect, useState } from 'react'
import {Routes, Route} from "react-router-dom";
import Logo from './components/Logo.png'
import Spiral from './components/spiral.png'
import NavBar from "./components/NavBar";
import DestinationsPage from "./components/DestinationsPage";
import Profile from "./components/Profile";
import dots from './components/dots.png'
import dots2 from './components/dots2.png'
import MapImg from './components/MapImg.png'
import Home from "./components/Home";
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import DestUpdate from './components/DestUpdate';
import DestinationsContainer from './components/DestinationsContainer';



function App() {
  // const [destinations, setDestinations] = useState([])
  // const [user, setUser] = useState(null)
  // const [attractions, setAttractions] = useState([])
  // const [errors, setErrors] = useState('')

  
  

  return (
    <div className="App">
      <div>
       
      <div className='nav'><NavBar /></div>
      {/* <img className='logo' src={Logo} alt="Logo" /> */}
      {/* <img className='MapImg' src={MapImg} alt="MapImg" />
      <img className='spiral' src={Spiral} alt="spiral" />  */}
      </div>
      <Routes>
        <Route exact path='/' element={<div className="landing-page"><LandingPage /></div>} />
        {/* <Route exact path='/signup' element={<AuthModal setUser={setUser} />} /> */}
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