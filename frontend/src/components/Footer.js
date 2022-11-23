import React from 'react';
import '../styles/Footer.css'

function Footer(){
    return(
        <div className='foot_container'>
          <p className='frontCredit'>
            Frontend developed by
            <a href="mailto:v.masiello1@studenti.poliba.it" title="mail"> Vincenzo Masiello </a> under the supervision
            of SisInfLab Research Group - Politecnico di Bari
          </p>
        </div>
    );
}

export default Footer;