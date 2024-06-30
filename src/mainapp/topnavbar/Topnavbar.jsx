import React, { useState } from 'react';
import './topnavstyle.css';

export default function Topnavbar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    require('./images/na3.jpg'),
    require('./images/na4.jpg'),
    require('./images/na1.jpg'),
    require('./images/na2.jpg')
    
  ];

  const nextImage = () => {
    setCurrentIndex((currentIndex + 2) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 2 + images.length) % images.length);
  };

  return (
    <div>
      <div className='headertop'>
        <div>
          <h2>Nagesh Indian Tailor(sirwar)</h2>
        </div>
        <div className='profile'>
          Profile
        </div>
      </div>
      <div className='videocontainer'>
        <video src={require('./videos/video1.mp4')} controls={false} autoPlay muted loop />
      </div>
      <div className='name'>Nagesh shop demo pics</div>

      <div className='carousel-container'>

        <div className='carousel'>
          <button className='arrow left' onClick={prevImage}>&lt;</button>
          <div className='carousel-images'>
            <img src={images[currentIndex]} alt='carousel-1' />
            <img src={images[(currentIndex + 1) % images.length]} alt='carousel-2' />
          </div>
          <button className='arrow right' onClick={nextImage}>&gt;</button>
        </div>
      </div>
      <div className='footercontainer'>
        <div>
          <p>Address: New Indian trailor main road sirwar, pincode-584129
            <p>Dist: Raichur TQ: manvi</p>
          </p>
          <p>Contact Us: +91-9880701991</p>
          <p> Location:  
            <a href="https://www.google.com/maps/dir/12.8881935,77.5963265/Nagesh+Indian+tailor/@14.5441805,76.0800916,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc829f0892363a7:0xb6ae703f31db007!2m2!1d77.0244748!2d16.1745331?entry=ttu" target="_blank" rel="noopener noreferrer">
              View on Map
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
