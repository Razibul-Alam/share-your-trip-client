import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import './Footer.css'

const FooterMain = () => {
    return (
        <div className=' bg-dark text-light'>
        <div className='row mainDiv container'>
            <div className='col-5'>
                <ul>
                    <li>No 40 Uttara Sreet 133/2 Dhaka, NY, BD.</li>
                    <li>share-yourTrip.com</li>
                    <li>(800) 1234 8888 - (800) 1234 9999</li>
                    <li>Open Time: 8:00AM - 6:00PM</li>
                </ul>
            </div>
            <div className='col-4'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className='col-3'>
<ul className='d-flex justify-content-center fs-4  align-items-center'>
    <li className='mx-2'><FontAwesomeIcon icon={faFacebook} /></li>
    <li className='mx-2'><FontAwesomeIcon icon={'font-awesome-flag'} /></li>
    <li className='mx-2'><FontAwesomeIcon icon={faTwitter} /></li>
    <li><FontAwesomeIcon icon={faFacebook} /></li>
</ul>
            </div>
</div>
</div>
    );
};

export default FooterMain;