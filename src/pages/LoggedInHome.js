import React from 'react';
import NavbarZade from './NavbarZade'; // Import NavbarZade component

export default function LoggedInHome() {
  return (
    <div>
      <NavbarZade/>
      <h1>This is logged in home</h1>
      <img src={process.env.PUBLIC_URL + '/logged-in-home.jpg'} alt="Example" 
      style={{ width: '300px', height: '200px' }} 
      />
    </div>
  );
}
