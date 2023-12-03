import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'

const Header = () => {
    return (
        <header className='header w-full'>
            <Container>
                <div className="navBar flex items-center justify-between">
                    <a href="" className="logo">
                        <Image
                            src="/logo.jpg"
                            alt=""
                            width={100}
                            height={100}
                        />
                    </a>
                </div>
            </Container>
        </header>
    )
}

export default Header