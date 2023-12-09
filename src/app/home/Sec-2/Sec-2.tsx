"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';


const images = [
    { id: 1, src: '/icons/bitmap-1.svg', title: 'Slide 1' },
    { id: 2, src: '/icons/bitmap-2.svg', title: 'Slide 2' },
    { id: 3, src: '/icons/bitmap-3.svg', title: 'Slide 3' },
    { id: 4, src: '/icons/bitmap-4.svg', title: 'Slide 4' },
    { id: 5, src: '/icons/bitmap-5.svg', title: 'Slide 5' },
]

const Sec2 = () => {
    return (
        <section className='section heroCarouse'>
            <div className="container">
                <p>asdsdsd</p>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={3}
                    loop={true}
                    loopAdditionalSlides={30}
                >
                    <SwiperSlide>
                        1
                    </SwiperSlide>
                    <SwiperSlide>
                        2
                    </SwiperSlide>
                </Swiper>
            </div>
        </section >
    )
}

export default Sec2