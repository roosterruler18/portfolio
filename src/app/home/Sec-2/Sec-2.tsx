"use client"
import React from 'react';
import ImageOptimize from '@/components/imageOptimize/imageOptimize';


const images = [
    { id: 1, src: '/icons/bitmap-1.svg', title: 'Slide 1' },
    { id: 2, src: '/icons/bitmap-2.svg', title: 'Slide 2' },
    { id: 3, src: '/icons/bitmap-3.svg', title: 'Slide 3' },
    { id: 4, src: '/icons/bitmap-4.svg', title: 'Slide 4' },
    { id: 5, src: '/icons/bitmap-5.svg', title: 'Slide 5' },
]

const Sec2 = () => {
    return (
        <section className='section heroLogo'>
            <div className="container grid grid-cols-5 gap-4">
                {
                    images.map((item, index) => {
                        return (
                            <div className='logo-item flex items-center justify-center' key={item.id}>
                                <ImageOptimize src={item.src} alt={item.title} />
                            </div>
                        )
                    })
                }
            </div>
        </section >
    )
}

export default Sec2