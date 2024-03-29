import React from 'react';
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import Image from 'next/image'

export default function Header() {

    const { data: session } = useSession()
    let loginBtn = session ? "Profile" : "Login"

    return (
        <div className='flex p-4 justify-between items-center sticky top-0'>
            <Link href="/" className="flex items-center">
                <Image src='/chef.png' alt='chef-hat' width={50} height={50}></Image>
                <p className="pl-4 text-3xl text-uni-brand font-light">Food Wrecked</p>
            </Link>
            
            <div className='md:flex gap-4 md:gap-12 md:-ml-20 items-baseline text-lg uppercase hidden px-5 md:text-sm lg:text-md'>
                <Link href='/pages/about'>About Us</Link>
                <Link href='/'>Connect</Link>
                <Link href='/pages/changelog'>Change Log</Link>
            </div>

            <Link href='/profile/home'><button className='hidden md:block bg-uni-brand text-white px-6 py-3 hover:shadow-lg'>{loginBtn}</button></Link>

        </div>
    )
}