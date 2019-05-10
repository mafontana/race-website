import React from 'react';
import Slider from 'react-slick'
import cycling_1 from '../../resources/images/cycling_1.jpg'
import cycling_2 from '../../resources/images/cycling_2.jpg'
import cycling_3 from '../../resources/images/cycling_3.jpg'

const Carrousel = () => {
    
    const settings = {
        dots: true, 
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
            >
            </div>
         </div>



         <div>
         <div className="carrousel_image"
         style={{
             background: `url(${cycling_3})`,
             height: `${window.innerHeight}px`,
         }}
         >
         </div>
         </div>



        </Slider>
            
        </div>
    );
};

export default Carrousel;