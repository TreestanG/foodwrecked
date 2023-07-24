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
        <Link href='/'>
            <div className="flex-col sm:flex-row w-[24rem] m-8 p-4 rounded-lg bg-slate-100 hover:cursor-pointer hover:drop-shadow-lg" onClick={handleClick}>
                <div>
                    <div className="flex items-baseline justify-between">
                        <h1 className="text-xl font-semibold">{recipe.title}</h1>
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
