import React from 'react';

import Navbar from './Navbar/Navbar'
import CarouselBanner from './CarouselBanner/CarouselBanner'
import Products from './Products/Products';
import AboutUs from './AboutUs';
import Service from './Service'
import Footer from './Footer';

const Home = (props) => {
    return(
        <>
        <Navbar/>
        <CarouselBanner/>
        <Footer/>
        <Service/>
        <AboutUs/>
        <Products/>
        </>        
    );
}

export default Home;