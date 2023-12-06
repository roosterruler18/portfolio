import React from 'react'
import Link from 'next/link'
import { LightButtonPrimary } from '@/components/Form/LightButtonPrimary'

const Sec1 = () => {
    return (
        <section className='section hero-banner bg-secondary-28293E'>
            <div className="container">
                <div className="grid grid-cols-2 gap-4 grid-rows-1">
                    <div className="boxLeft text-white">
                        <h2>Modern Studio</h2>
                        <h1>
                            We’re Help
                            To Build Your
                            Dream Project
                        </h1>
                        <p>Agency provides a full service range including technical skills, design, business understanding.</p>
                        <div className="flex items-center gap-12">
                            <LightButtonPrimary text={'How We Work'} className={'lightButtonPrimary'} buttonClassName={'lightButtonPrimaryText'} buttonLink={'/services'} />
                            <Link href='/contact'>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sec1