import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

function handleClick() {
    console.log('clicked');
}

export default function RecipeCard({ recipe }) {

    return (
        <Link href={recipe.links}>
            <div className="flex flex-col sm:flex-row  py-4 hover:cursor-pointer hover:drop-shadow-lg" onClick={handleClick}>

                <img src={recipe.image} className="w-48 h-48 object-top object-cover"></img>
                <div className="rounded-r-lg py-4 bg-slate-100 w-[24rem] px-4">
                    <div className="flex items-baseline justify-between">
                        <h1 className="text-xl font-semibold">{recipe.name}</h1>
                        <p className="font-medium">{recipe.cuisine}</p>
                    </div>
                    <p className="text-sm">{recipe.meal}</p>

                    <div className="flex justify-between items-baseline">
                        <p className="">{`Protein: ${recipe.protein}`}</p>

                        <div className="flex">
                            <p className="font-light">{recipe.serving}</p>
                            <FontAwesomeIcon icon={faUser} className="pt-1 pl-2" />
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    )
}
