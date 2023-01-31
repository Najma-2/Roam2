import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './DestCard.css'


function DestCard({id,country,city,attractions,star_rating, dest}){

   


    const destAtt = dest.attractions.map(attraction => {
        return(
            attraction.location
        )
    })

    return(
    <Col style={{
            marginTop: '10px',
        }}>
            <Card key={id} className="propCard">
                
                <Card.Title id="title" className='text-center'>{country}{city}</Card.Title>
                <Card.Img className="img"/>
                <Card.Text className='text-center text-truncate'>{destAtt}</Card.Text>
                <Card.Text className='text-center'>{star_rating} ⭐️</Card.Text>
            
            </Card>
        </Col>
    )
}



export default DestCard