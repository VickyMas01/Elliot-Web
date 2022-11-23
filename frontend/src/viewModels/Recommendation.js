import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js'

function Recommendation(){
    return(
        <>
        <Navbar preProc='preProc0' rec='rec1' evl='evl0'/>
        <div><h1>Questo è il recommendation</h1></div>
        <Footer />
        </>

    );
}

export default Recommendation;