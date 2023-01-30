import {React, useState} from "react";
import Form from 'react-bootstrap/Form'

function AddDest({AddDest, user, destination}){
    const [newDestination, setNewDestination] = useState(false)
    const [error, setError] = useState()

    function newDestSubmit(){
        fetch('/create', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                country: country,
                city: city,
                attractions: attractions,
                star_rating: star_rating


            })
        })
        .then(res => {
            if (res.ok){
                res.json().then(data => {
                    AddDest(data)
                    setNewDestination(false)
                })
            } else {
                res.json().then(data => setError(data.error))
            }
        })
    }

 return(

    <div>
        <Form>
            
        </Form>
    </div>
 )
}


export default AddDest


