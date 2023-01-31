import React from 'react'
import DestCard from './DestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function DestinationsContainer({destinations}){
     console.log(destinations)
   
const destList = destinations.map((destination) => {
    return(
        <DestCard
        country={destination.country}
        city={destination.city}
        attractions={destination.attractions.location}
        star_rating={destination.star_rating}
        id={destination.id}
        key={destination.id}
        dest={destination}
        />
    )
})



    return(
        <div >
          <h6 className="pageTitle"> Explore Travel Guides and Itineraries</h6>
            <Container style={{
            }}>
              <Row xs={4}>
                {destList}
              </Row>
            </Container>
          </div>
    )
}






export default DestinationsContainer