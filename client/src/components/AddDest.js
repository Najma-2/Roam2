import {React, useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./AddDest.css"


function AddDest({destinations,handleNewDestination, newDest, user, country, city, attractions, star_rating}){
    const [newDestination, setNewDestination] = useState()
    const [error, setError] = useState()

    function handleDestinationToggle(){
        setNewDestination(!newDestination)
    }
    
    console.log(destinations)

    function newDestSubmit(){
        fetch('/destinations', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                country,
                city,
                attractions,
                star_rating,


            }),
        })
        .then(res => {
            if (res.ok){
                res.json().then(data => {
                    handleNewDestination(data)
                    setNewDestination()
                })
            } else {
                res.json().then(data => setError(data.error))
            }
        })
    }

 return(

    <div className="main">
        
        <Form>
            <Form.Group>
            <Form.Label className="sign" align="center">Add Destination</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Country"
            className="un"
            value={country}
            />
            
            <Form.Control className="un"
            type="text"
            placeholder="City"
            value={city}
            />
            
            <Form.Control 
            type="text"
            placeholder="Attractions"
            className="un"
            value={attractions}
            />
            
            <Form.Control 
            type="text"
            placeholder="Star Rating"
            className="un"
            value={star_rating} 
            />
            </Form.Group>
            <Button className="destform-submit" href="/destinations" align="center" onClick={newDestSubmit}>Submit</Button> 
        </Form>
        
    </div>
 )
}


export default AddDest


