"use client "
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';



const Footer = () => {
    return (
        <footer className='pt-20'>
            <div className="container">
                <div className="grid grid-cols-12 gap-4 grid-rows-1 pb-16">
                    <div className="footer-item col-span-full sm:col-span-3">
                        <Link href={'/'}>
                            <Image src="/logo.png"
                                alt=""
                                width={170}
                                height={69} />
                        </Link>
                    </div>
                    <div className="footer-item col-span-6 sm:col-span-3">
                        <p className='text-base uppercase tracking-[3px] text-primary-text_dark--accent mb-4 font-medium'>Menu</p>
                        <ul className='flex flex-col gap-4'>
                            <li>
                                <Link href={'/about'} className='text-primary-text-dark'>About</Link>
                            </li>
                            <li>
                                <Link href={'/services'} className='text-primary-text-dark'>Services</Link>
                            </li>
                            <li>
                                <Link href={'/blog'} className='text-primary-text-dark'>Blog</Link>
                            </li>
                            <li>
                                <Link href={'/contact'} className='text-primary-text-dark'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item col-span-6 sm:col-span-3">
                        <p className='text-base uppercase tracking-[3px] text-primary-text_dark--accent mb-4 font-medium'>Service</p>
                        <ul className='flex flex-col gap-4'>
                            <li>
                                <Link href={'/'} className='text-primary-text-dark'>Design</Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-primary-text-dark'>Development</Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-primary-text-dark'>Marketing</Link>
                            </li>
                            <li>
                                <Link href={'/'} className='text-primary-text-dark'>See More</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item col-span-full sm:col-span-3 border-t sm:border-0 border-secondary-F3D1BF pt-4 sm:pt-0">
                        <ul className='flex items-center gap-4 justify-center sm:justify-end'>
                            <li>
                                <Link href={'/'} className='rounded-full w-[48px] h-[48px] bg-primary-text_dark--accent flex items-center justify-center'><IconBrandFacebook className='text-white' /></Link>
                            </li>
                            <li>
                                <Link href={'/'} className='rounded-full w-[48px] h-[48px] bg-primary-text_dark--accent flex items-center justify-center'><IconBrandTwitter className='text-white' /></Link>
                            </li>
                            <li>
                                <Link href={'/'} className='rounded-full w-[48px] h-[48px] bg-primary-text_dark--accent flex items-center justify-center'><IconBrandInstagram className='text-white' /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-between coppyRight border-t border-secondary-F3D1BF pt-11 pb-12">
                    <p className='text-base text-primary-text_dark_gray'>Copyright © 2023 Rooster Ruler. All Rights Reserved.</p>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <Link href={'/'} className='text-base text-primary-text_dark leading-8'>Terms of Use</Link>
                        </li>
                        <li>
                            <Link href={'/'} className='text-base text-primary-text_dark leading-8'>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer