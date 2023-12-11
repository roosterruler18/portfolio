import Link from 'next/link'
import React from 'react'

const Sec4 = () => {
    return (
        <section className="section heroWeWork">
            <div className="container">
                <div className='grid grid-cols-12 gap-4 mb-[160px]'>
                    <div className="boxLeft col-span-full sm:col-span-6">
                        <div className="mb-7">
                            <h2 className='secondary-title mb-5'>How we work</h2>
                            <h1 className="primary-title text">
                                Making Your Projects
                                <br />
                                Look Awesome
                            </h1>
                        </div>
                        <div className="boxContent">
                            <p className='text-base text-primary-text_dark_gray leading-[32px] tracking-tight'>Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.</p>
                            <Link href={'/about'} className='readMoreLink'>Read More</Link>
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

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sec4