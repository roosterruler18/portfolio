"use client"
import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from 'next/link';
import { DarkButton } from '../Form/DarkButton';
import ImageOptimize from '../imageOptimize/imageOptimize';
import './style.sass'

const navBar = [
    { id: 1, name: 'About', link: '/about' },
    { id: 2, name: 'Services', link: '/services' },
    { id: 3, name: 'Portfolio', link: '/portfolio' },
    { id: 4, name: 'Blog', link: '/blog' },
]


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    return (
        <Navbar
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className='header bg-secondary-28293E py-4 '
            shouldHideOnScroll
        >
            <div className='container'>
                <div className='flex items-center gap-8 justify-between'>
                    <div className="sm:hidden justify-start">
                        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className='text-white' />
                    </div>
                    <div className="sm:hidden pr-3 justify-center">
                        <Link href={'/'} onClick={handleMenuClose}>
                            <ImageOptimize src='/logo.png' />
                        </Link>
                    </div>
                    <NavbarContent className="hidden sm:flex gap-8" justify="start">
                        <Link href={'/'} className='mr-auto'>
                            <ImageOptimize src='/logo.png' />
                        </Link>
                        {navBar.map((item, index) => (
                            <NavbarItem key={`${item}-${index}`}>
                                <Link
                                    className="w-full text-white"
                                    href={item.link}
                                >
                                    {item.name}
                                </Link>
                            </NavbarItem>
                        ))}
                    </NavbarContent>
                    <NavbarMenu className='navMobile gap-6 py-8'>
                        {navBar.map((item, index) => (
                            <NavbarMenuItem key={`${item}-${index}`} onClick={handleMenuClose}>
                                <Link
                                    className="w-full text-2xl text-primary-text_light_accent"
                                    href={item.link}
                                >
                                    {item.name}
                                </Link>
                            </NavbarMenuItem>
                        ))}
                    </NavbarMenu>
                    <DarkButton text={'CONTACT'} buttonLink={'/contact'} className={'darkButton'} buttonClassName={'darkButtonText'} onClick={handleMenuClose} />
                </div>
            </div>
        </Navbar>
    )
}

export default Header