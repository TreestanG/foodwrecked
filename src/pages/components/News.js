import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


export default function Header() {
    return (
        <div className='flex p-4 justify-center items-center sticky bg-red-400 h-8'>
            <FontAwesomeIcon icon={faExclamationCircle} className='w-4 h-4 p-6' />
            <p>Please keep in mind this site is in <b>DEVELOPMENT</b>. Bugs will occur</p>
        </div>
    )
}