import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useSession } from 'next-auth/react';

export default function Header() {
    const { data: session, status } = useSession()
    let loginBtn = session ? "Profile" : "Login"

    if (session) {
        return <></>
    } else {
        return (
            <div className='flex p-4 justify-between items-center sticky'>
                <a href="/"><img src='/food_wrecked.png' className='w-64 h-12'></img></a>
                <form className='hidden sm:flex h-12 w-[30rem] items-center justify-end'>
                    <input className='rounded-full border-1 h-8 w-full bg-slate-200 hidden sm:block md:w-1/2 lg:w-fit'></input>
                    <FontAwesomeIcon icon={faSearch} className='w-4 h-4 absolute p-5' />
                </form>
                <div className='flex gap-4 md:gap-8 items-baseline'>
                    <a href='/pages/about' className='hidden sm:block px-5 md:text-sm lg:text-lg'>About Us</a>
                    <a href='/' className='hidden sm:block px-5 md:text-sm lg:text-lg '>Connect</a>
                    <a href='/pages/changelog' className='hidden sm:block px-5 md:text-sm lg:text-lg'>Change Log</a>
                    <Link href='/profile/home'><button className='hidden md:block bg-lime-600 rounded-full text-white px-6 py-3 hover:shadow-lg'>{loginBtn}</button></Link>
                    <FontAwesomeIcon icon={faBars} className="hidden sm:hidden" />
                </div>
            </div>
        )
    }


}