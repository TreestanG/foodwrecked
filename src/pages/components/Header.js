import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default class Header extends Component {
    render() {
        return (
            <div className='flex p-4 justify-between items-center sticky'>
                <a href="/"><img src='/food_wrecked.png' className='w-64 h-12'></img></a>
                <form className='hidden sm:flex h-12 w-[30rem] items-center justify-end'>
                    <input className='rounded-full border-1 h-8 w-full bg-slate-200'></input>
                    <FontAwesomeIcon icon={faSearch} className='w-4 h-4 absolute p-5' />
                </form>
                <div className='flex gap-8 items-baseline'>
                    <a href='/pages/about' className='hidden sm:block px-5'>About Us</a>
                    <a href='/' className='hidden sm:block px-5'>Connect</a>
                    <a href='/' className='hidden sm:block px-5'>Menu</a>
                    <button className='hidden sm:block bg-uni-green rounded-full px-6 py-3 text-white hover:shadow-lg'>Login</button>
                    <FontAwesomeIcon icon={faBars} className="hidden sm:hidden"/>
                </div>
            </div>
        )
    }
}