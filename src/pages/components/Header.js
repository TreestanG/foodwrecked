import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default class Header extends Component {
    render() {
        return (
            <div className='flex p-4 justify-between'>
                <a href="/"><img src='/food_wrecked.png' className='w-80 h-16'></img></a>
                <input className='rounded-full border-1 h-4'></input>
                <FontAwesomeIcon icon={faSearch} className='w-4 h-4'/>
            </div>
        )
    }
}