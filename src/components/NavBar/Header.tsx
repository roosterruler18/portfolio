"use client"
import React from 'react';
import Image from 'next/image'
import Container from '@/components/layouts/Container'
import Link from 'next/link';
import { DarkButton } from '../forms/DarkButton';

const navBar = [
    { id: 1, name: 'About', link: '/about' },
    { id: 2, name: 'Services', link: '/services' },
    { id: 3, name: 'Portfolio', link: '/portfolio' },
    { id: 4, name: 'Blog', link: '/blog' },
]

const Header = () => {
    return (
        <header className='header w-full py-4 bg-secondary-28293E'>
            <Container>
                <div className="navBar flex items-center justify-between">
                    <a href="/" className="logo">
                        <Image
                            src="/logo.png"
                            alt=""
                            width={170}
                            height={69}
                        />
                    </a>
                    <ul className="nav flex items-center gap-16">
                        {navBar.map((item) => (
                            <li className="nav-item" key={item.id}>
                                <Link href={item.link} className='nav-link text-white text-base'>
                                    {item.name}
                                </Link>
                            </li>
                        ))}

                    </ul>
                    <DarkButton text={'Contact'} buttonLink={'/contact'} buttonClassName={'btn btn-dark__button rounded-[6px] border border-primary-text_gray py-5 px-9 text-white text-sm font-black'} />
                </div>
            </Container>
        </header>
    )
}

export default Header