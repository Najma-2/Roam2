import React, {useState} from 'react';
import "./Profile.css";
import logo from './Logo.png';
import ProfilePage from './ProfilePage.jpeg';
import PictureBook from './PictureBook.png';
import Add from './Add.png';

function Profile({users}){

    

    return(

        <div>
            
            <div> <img className='logo' src={logo} alt="Logo" /></div>
            <div> <img className='ProfilePage' src={ProfilePage} alt="ProfilePage" /></div>
            <div> <img className='PictureBook' src={PictureBook} alt="PictureBook" /></div>
            <div> <img className='Add' src={Add} alt="Add" /></div>
            <div className="userinfo"> 
            {/* <img src="https://as1.ftcdn.net/v2/jpg/01/65/63/94/1000_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg" alt="UserPic"/> */}
            {/* <h6>Username</h6> */}
            </div>
        </div>
    )
}




export default Profile