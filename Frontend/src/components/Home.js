import React, { Component } from 'react';

import Navbar from './Navbar/Navbar'
import CarouselBanner from './CarouselBanner/CarouselBanner'

const Home = (props) => {
    return(
        <>
        <Navbar/>
        <CarouselBanner/>
        </>        
    );
}

export default Home;