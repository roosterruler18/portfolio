"use client "
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';



const Footer = () => {
    return (
        <footer className='py-7'>
            <div className="container">
                <div className="grid grid-cols-12 gap-4 grid-rows-1">
                    <div className="footer-item text-center col-span-full sm:col-span-3">
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
                    <div className="footer-item col-span-full sm:col-span-3">
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
            </div>
        </footer>
    )
}

export default Footer