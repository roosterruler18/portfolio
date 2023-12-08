import ImageOptimize from '@/components/imageOptimize/imageOptimize';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';

const images = [
    { id: 1, src: '/icons/bitmap-1.svg', title: 'Slide 1' },
    { id: 2, src: '/icons/bitmap-2.svg', title: 'Slide 2' },
    { id: 3, src: '/icons/bitmap-3.svg', title: 'Slide 3' },
    { id: 4, src: '/icons/bitmap-4.svg', title: 'Slide 4' },
    { id: 5, src: '/icons/bitmap-5.svg', title: 'Slide 5' },
]

const Sec2 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
    };
    return (
        <section className='section heroCarouse'>
            <div className="container">
                <Slider {...settings} className="w-full h-12 relative overflow-hidden whitespace-nowrap">
                    {images.map((item, index) => (
                        <div className='marqueeItem' key={item.id}>
                            <ImageOptimize src={item.src} alt="Slide 1" />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Sec2