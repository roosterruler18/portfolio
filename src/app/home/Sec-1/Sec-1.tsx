import React from 'react'
import Link from 'next/link'
import { LightButtonPrimary } from '@/components/Form/LightButtonPrimary'
import ImageOptimize from '@/components/imageOptimize/imageOptimize'

const Sec1 = () => {
    return (
        <section className='section hero-banner bg-secondary-28293E h-auto xl:h-screen'>
            <div className="container h-full flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 grid-rows-1">
                    <div className="boxLeft flex flex-col justify-center gap-4 sm:gap-6">
                        <h2 className='text-base text-primary-text_light_accent uppercase tracking-[3px]'>rooster ruler Studio</h2>
                        <h1 className='text-[36px] sm:text-7xl text-white font-extrabold tracking-[-2px]'>
                            We’re Help<br></br>
                            To Build Your<br></br>
                            Dream Project
                        </h1>
                        <p className='text-base text-primary-text_light_gray leading-8'>Agency provides a full service range including technical skills, design, business understanding.</p>
                        <div className="flex items-center gap-12">
                            <LightButtonPrimary text={'How We Work'} className={'lightButtonPrimary'} buttonClassName={'lightButtonPrimaryText'} buttonLink={'/services'} />
                            <Link href='/contact' className='text-base text-white'>Contact Us</Link>
                        </div>
                    </div>
                    <div className="blockRight h-full flex items-center">
                        <ImageOptimize className='hidden sm:block w-full' src='/images/herobanner.png' />
                        <ImageOptimize className='block sm:hidden w-full' src='/images/herobanner_mobile.png' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sec1