import React from 'react'
import "./Profile.css"

function Profile({user}){


    // fetch("localhost:3000/profile")
    // .then(response => {
    //   if (response.ok) {
    //     return response.json();
    //   } else if (response.status === 401) {
    //     throw new Error("Not logged in.");
    //   } else {
    //     throw new Error("Request failed.");
    //   }
    // })
    // .then(user => {
    //  console.log(user)
    // })
    // .catch(error => {
    //   console.error(error);
    // });

    console.log(user)


    return(

        <div>
            <div className="userinfo"> 
            <img src="https://as1.ftcdn.net/v2/jpg/01/65/63/94/1000_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg" alt="UserPic"/>
            <h6>Username</h6>
            </div>










        </div>
    )
}




export default Profile