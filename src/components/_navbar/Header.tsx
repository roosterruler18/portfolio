"use client"
import React from 'react';
import Image from 'next/image'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { DarkButton } from '../Form/DarkButton';
import './style.sass'

const navBar = [
    { id: 1, name: 'About', link: '/about' },
    { id: 2, name: 'Services', link: '/services' },
    { id: 3, name: 'Portfolio', link: '/portfolio' },
    { id: 4, name: 'Blog', link: '/blog' },
]

const Header = () => {
    return (
        <Navbar shouldHideOnScroll className='header w-full py-4 bg-secondary-28293E' maxWidth='2xl'>
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
            <NavbarContent className="hidden sm:flex gap-16" justify="center">
                {navBar.map((item) => (
                    <NavbarItem>
                        <Link href={item.link} className='nav-link text-white text-base'>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <DarkButton text={'Contact'} buttonLink={'/contact'} buttonClassName={'btn btn-dark__button flex items-center justify-center rounded-[6px] border border-primary-text_gray py-2 px-9 text-white text-sm font-black'} />
            </NavbarContent>
        </Navbar>
    )
}

export default Header