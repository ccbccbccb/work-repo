import React from 'react'
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import  data  from '../Data/data';
import Card from '../Components/Card.js';

function Home() {
  return (
    <div>
        <div className="main-bg"></div>
        <div className="container">
        <div>
         <Card />
         </div>
      </div>
        </div>
  )
}

export default Home
