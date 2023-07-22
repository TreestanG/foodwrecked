import React, { Component } from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image'

const inter = Inter({ weight: '800', subsets: ['latin'] });
export default class About extends Component {
    render() {
        return (
            <div className="">
                <div className="bg-gradient-to-r from-slate-950 via-green-950 to-teal-950 h-[54rem] animate-gradient-xy flex ">
                    <div className="flex items-center px-4 sm:px-32 justify-between w-full">
                        <div>
                            <div className="text-white text-5xl sm:text-8xl font-semibold w-[24rem] sm:w-[40rem]">
                                <span className="">The food recommendation app for </span>
                                <span className="text-green-500">everyone</span>
                            </div>
                            <div className="flex">
                                <button className="bg-green-500 rounded-full px-6 py-3 text-white mt-10 ml-5 text-lg">Get Started</button>
                            </div>
                        </div>

                        <img src='/restaurant.png' className='w-[34rem] rounded-3xl none sm:block'></img>
                    </div>
                </div>
                <div className="bg-teal-950 h-[32rem]">

                </div>
            </div>
        )
    }
}