import React from 'react'


function Profile({user}){


    fetch("/profile")
    .then(response => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 401) {
        throw new Error("Not logged in.");
      } else {
        throw new Error("Request failed.");
      }
    })
    .then(user => {
     console.log(user)
    })
    .catch(error => {
      console.error(error);
    });


    return(

        <div>
            
        </div>
    )
}




export default Profile