import React from 'react';
import Slider from 'react-slick'
import cycling_1 from '../../resources/images/cycling_1.jpg'

const Carrousel = () => {
    
    const settings = {
        dots: false, 
        infinite: true,
        autoplay: true,
        speed: 500
    }
    
    return (
        <div
         className="carrousel_wrapper"
         style={{
             height: `${window.innerHeight}px`,
             overflow: 'hidden'
         }}
        >
        <Slider {...settings}>
         <div>
            <div className="carrousel_image"
            style={{
                background: `url(${cycling_1})`,
                height: `${window.innerHeight}px`,
            }}
            ></div>
         </div>
         <div>
         image 2
         </div>
         <div>
         image 3
         </div>



        </Slider>
            
        </div>
    );
};

export default Carrousel;