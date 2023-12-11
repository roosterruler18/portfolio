import React from 'react'
import ImageOptimize from '@/components/imageOptimize/imageOptimize'
import { LightButton } from '@/components/Form/LightButton'

const Sec3 = () => {
    return (
        <section className='section heroAbout'>
            <div className="container">
                <div className='grid grid-cols-12 gap-4 mb-[160px]'>
                    <div className="boxLeft col-span-full sm:col-span-6">
                        <div className="boxImage">
                            <ImageOptimize src='/images/sec-3.png' />
                        </div>
                    </div>
                    <div className="boxRight col-span-full sm:col-span-6 ml-36 flex flex-col justify-center gap-9">
                        <div className="titleBox">
                            <h2 className='secondary-title mb-5'>About</h2>
                            <h1 className="primary-title">
                                An Experience
                                <br />
                                Design Agency
                            </h1>
                        </div>
                        <div className="boxContent">
                            <h3 className='titleContent mb-5'>Provides a full service range</h3>
                            <p className='text-base text-primary-text_dark_gray leading-[32px] tracking-tight'>Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
                            <LightButton text={'About Us'} className={'lightButton mt-9'} buttonClassName={'btn btn-light'} buttonLink={'/about'} />
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-0'>
                    <div className="boxItem col-span-4 p-12">
                        <h3 className="itemTitle text-[40px] text-primary-text_dark font-extrabold leading-[48px] mb-3">
                            42%
                        </h3>
                        <p className='text-xl text-primary-text_dark_gray leading-[32px]'>Years of experience</p>
                    </div>
                    <div className="boxItem col-span-4 p-12">
                        <h3 className="itemTitle text-[40px] text-primary-text_dark font-extrabold leading-[48px] mb-3">
                            73+
                        </h3>
                        <p className='text-xl text-primary-text_dark_gray leading-[32px]'>Agency members</p>
                    </div>
                    <div className="boxItem col-span-4 p-12">
                        <h3 className="itemTitle text-[40px] text-primary-text_dark font-extrabold leading-[48px] mb-3">
                            5.000
                        </h3>
                        <p className='text-xl text-primary-text_dark_gray leading-[32px]'>Projects complete</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sec3