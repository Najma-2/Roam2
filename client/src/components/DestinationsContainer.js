import React from 'react'
import DestCard from './DestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import logo from './Logo.png';
import Destinations from "./Destinations.png";
import dots from './dots.png'
import AddDest from './AddDest';

function DestinationsContainer({destinations}){
   
   
  const destList = destinations.map((destination) => {
    return(
        <DestCard
        country={destination.country}
        city={destination.city}
        attractions={destination.attractions.location}
        img={destination.img}
        star_rating={destination.star_rating}
        id={destination.id}
        key={destination.id}
        dest={destination}
        />
    )
    
})




    return(
        <div >
          
          <div> <img className='logo' src={logo} alt="Logo" /></div>
          {/* <div> <img className='Destinations' src={Destinations} alt="Destinations" /></div>  */}
          <div> <img className='dots' src={dots} alt="Dots" /></div> 
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