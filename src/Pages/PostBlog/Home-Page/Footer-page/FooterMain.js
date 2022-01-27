import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import './Footer.css'

const FooterMain = () => {
    return (
        <div className='container'>
        <div className='row mainDiv'>
            <div className='col-5'>
                <ul>
                    <li>No 40 Baria Sreet 133/2 NewYork City, NY, USD.</li>
                    <li>Hidesign@Magentech.com</li>
                    <li>(800) 1234 8888 - (800) 1234 9999</li>
                    <li>Open Time: 8:00AM - 6:00PM</li>
                </ul>
            </div>
            <div className='col-4'>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Dashboard</li>
                    <li>Login</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='col-3'>
<ul className='d-flex justify-content-center align-items-center'>
    <li><FontAwesomeIcon icon={faFacebook} /></li>
    <li><FontAwesomeIcon icon={'font-awesome-flag'} /></li>
    <li><FontAwesomeIcon icon={faTwitter} /></li>
    <li><FontAwesomeIcon icon={faFacebook} /></li>
</ul>
            </div>
</div>
</div>
    );
};

export default FooterMain;