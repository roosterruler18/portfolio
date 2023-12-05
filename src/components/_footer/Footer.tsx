"use client "
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { IconBrandFacebookFilled } from '@tabler/icons-react';


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="grid grid-cols-4 gap-4 grid-rows-1">
                    <div className="footer-item">
                        <Link href={'/'}>
                            <Image src="/logo.png"
                                alt=""
                                width={170}
                                height={69} />
                        </Link>
                    </div>
                    <div className="footer-item">
                        <p className='text-base uppercase tracking-[3px] text-primary-text_dark--accent'>Menu</p>
                    </div>
                    <div className="footer-item">
                        <p className='text-base uppercase tracking-[3px] text-primary-text_dark--accent'>Service</p>
                    </div>
                    <div className="footer-item">
                        <ul>
                            <li>
                                <Link href={'/'}><IconBrandFacebookFilled/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer