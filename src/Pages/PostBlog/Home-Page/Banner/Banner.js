import React from 'react';
import { Carousel } from 'react-bootstrap';
import BannerItem from './BannerItem';

const Banner = () => {
    return (
        <>
        <section> 
        <Carousel variant="dark" className='pb-5 bg-dark'>
        <Carousel.Item>
 <BannerItem/>
  </Carousel.Item>
  <Carousel.Item>
  <BannerItem/>
  </Carousel.Item>
  <Carousel.Item>
  <BannerItem/>
  </Carousel.Item>
</Carousel>  
        </section>      
</>
    );
};

export default Banner;