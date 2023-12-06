"use client"
import React from 'react';
import Image from 'next/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button } from "@nextui-org/react";
import { DarkButton } from '../Form/DarkButton';
import './style.sass'
import Link from 'next/link';

const navBar = [
    { id: 1, name: 'About', link: '/about' },
    { id: 2, name: 'Services', link: '/services' },
    { id: 3, name: 'Portfolio', link: '/portfolio' },
    { id: 4, name: 'Blog', link: '/blog' },
]

const Header = () => {
    return (
        <Navbar shouldHideOnScroll className='header w-full py-2 bg-secondary-28293E'>
            <div className="container">
                <div className="flex items-center">
                    <NavbarBrand>
                        <Link href='/' className='nav-link text-white text-base'>
                            <Image
                                src="/logo.png"
                                alt=""
                                width={170}
                                height={69}
                            />
                        </Link>
                    </NavbarBrand>
                    <NavbarContent className="hidden sm:flex gap-16 h-auto nav-bar" justify="center">
                        {navBar.map((item) => (
                            <NavbarItem key={item.id} className='nav-item'>
                                <Link href={item.link} title={item.name} className='nav-link text-white text-base'>
                                    {item.name}
                                </Link>
                            </NavbarItem>
                        ))}
                    </NavbarContent>
                    <NavbarContent justify="end" className='h-auto'>
                        <DarkButton text={'Contact'} className={'darkButton'} buttonClassName={'darkButtonText'} buttonLink={'/contact'} />
                    </NavbarContent>
                </div>
            </div>
        </Navbar>
    )
}

export default Header