import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import Image from 'next/image'

export default function Header() {

    const { data: session } = useSession()
    let loginBtn = session ? "Profile" : "Login"

    return (
        <div class='flex p-4 justify-between items-center sticky'>
            <Link href="/" class="flex items-center">
                <Image src='/chef.png' alt='chef-hat' width={50} height={50}></Image>
                <p class="pl-4 text-3xl text-uni-brand font-light">Food Wrecked</p>
            </Link>
            <form class='hidden sm:flex h-12 w-[30rem] items-center justify-end'>
                <input class='rounded-full border-1 h-8 w-full bg-slate-200 hidden sm:block md:w-1/2 lg:w-fit'></input>
                <FontAwesomeIcon icon={faSearch} class='w-4 h-4 absolute p-5' />
            </form>
            <div class='flex gap-4 md:gap-8 items-baseline'>
                <Link href='/pages/about' class='hidden sm:block px-5 md:text-sm lg:text-lg'>About Us</Link>
                <Link href='/' class='hidden sm:block px-5 md:text-sm lg:text-lg '>Connect</Link>
                <Link href='/pages/changelog' class='hidden sm:block px-5 md:text-sm lg:text-lg'>Change Log</Link>
                <Link href='/profile/home'><button class='hidden md:block bg-uni-brand rounded-full text-white px-6 py-3 hover:shadow-lg'>{loginBtn}</button></Link>
                <FontAwesomeIcon icon={faBars} class="hidden sm:hidden" />
            </div>
        </div>
    )
}