import React, { useEffect, useState } from 'react'
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import DestinationsContainer from "./components/DestinationsContainer";
import Profile from "./components/Profile";
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import AddDest from './components/AddDest';



function App() {
  const [user, setUser] = useState(null)
  const [destinations, setDestinations] = useState([])
  const [error, setError] = useState()
  const [newDest, setNewDest] = useState()
  
  useEffect(() => {
      fetch("/profile").then((response) => {
        if (response.ok) {
          response.json().then((user) => {
            setUser(user)
          });
        }
      });
    }, [])

  useEffect(() => {
  fetch("/destinations")
    .then((res) => {
      if (res.ok) {
        res.json().then(data => {
          setDestinations(data);
        })
      } else {
        res.json().then(data => setError(data.error))
      }
    })
}, []);


function handleNewDestination(newDest){
  setNewDest([...destinations, newDest])
}

  return (
    <div className="App">
      <div>
       
      <div className='nav'><NavBar user={user} setUser={setUser} /></div>
      </div>
      <Routes>
        <Route exact path='/' element={<div className="landing-page"><AuthModal /></div>} />
        <Route exact path="/destinations" element={<DestinationsContainer destinations={destinations}/>} />
        <Route exact path="/create" element={<AddDest handleNewDestination={handleNewDestination} user={user} destinations={destinations} newDest={newDest}/>} />
        <Route exact path="/profile" element={<Profile user={user} />} />
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