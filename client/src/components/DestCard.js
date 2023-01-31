import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './DestCard.css'


function DestCard({id,img,country,city,attractions,star_rating, dest}){

   


    const destAtt = dest.attractions.map(attraction => {
        return(
            attraction.location
        )
    })

    return(


        <div className="main-card">
        <Col style={{
            background: 'transparent', 
            marginTop: '10px',
            
            
            
           
        }}>

            <Card key={id} className="">
                {/* <img class="card-img-top" src="https://www.tutorialspoint.com/avro/images/apache-avro-mini-logo.jpg" alt="Card image" style="width:100%">g</img> */}
                <Card.Title id="title" className='text-center'>{city} {country}</Card.Title>
                <Card.Img className="img" src={'https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFwc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60'}/>
                <span><Card.Text className='text-center text-truncate'>{destAtt}</Card.Text></span>
                <Card.Text className='text-center'>{star_rating} ⭐️ </Card.Text>
            
            </Card>
             </Col>
            </div>
    )
}



export default DestCard