import {React, useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
                country: country,
                city: city,
                attractions: attractions,
                star_rating: star_rating,


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

    <div>
        {newDestination ?
        <Form>
            <Form.Group>
            <Form.Label>Add Destination</Form.Label>
            <Form.Control 
            type="text"
            placeholder="Country"
            value={country}
            />
            <br/>
            <Form.Control 
            type="text"
            placeholder="City"
            value={city}
            />
            <br/>
            <Form.Control 
            type="text"
            placeholder="Attractions"
            value={attractions}
            />
            <br/>
            <Form.Control 
            type="text"
            placeholder="Star Rating"
            value={star_rating} 
            />
            </Form.Group>
            <Button onClick={newDestSubmit}>Submit</Button> 
        </Form>
        : null}
        { user ?  <Button
                    style={{ marginTop: '10px' }}
                    onClick={handleDestinationToggle}
                >Add a Destination!
                </Button>: null  }
    </div>
 )
}


export default AddDest


