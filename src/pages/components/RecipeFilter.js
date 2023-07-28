import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import Recipes from '../../../data/spreadsheet_recipes.json'
import RecipeFilterToggle from './RecipeFilterToggle';

const filterOptions = [
    { name: 'Cuisine' },
    { name: 'Meal' },
    { name: 'Protein' },
]


export default function RecipeFilter() {
    let data = Object.values(Recipes)
    let cuisine = [...new Set(data.map(r => r.cuisine))]
    let meal = [...new Set(data.map(r => r.meal))].filter(m => m.toLowerCase() !== "none")
    let protein = [...new Set(data.map(r => r.protein))].filter(m => m.toLowerCase() !== "none")

    return (
        <div className="pt-12 w-[25rem]">


            <h1 className="font-semibold text-xl">Filter by category </h1>
            <div className="flex flex-col pt-4">
                <h1 className=" font-semibold">Cuisines</h1>

                <div className="flex flex-wrap rounded-lg p-6 pl-0 gap-4">
                    {
                        cuisine.map(c => <RecipeFilterToggle key={c} category={c} />)
                    }
                </div>
                <h1 className=" font-semibold">Meals</h1>

                <div className="flex flex-wrap rounded-lg p-6 pl-0 gap-4">
                    {
                        meal.map(c => <RecipeFilterToggle key={c} category={c} />)
                    }
                </div>
                <h1 className=" font-semibold">Proteins</h1>

                <div className="flex flex-wrap rounded-lg p-6 pl-0 gap-4">
                    {
                        protein.map(c => <RecipeFilterToggle key={c} category={c} />)
                    }
                </div>

            </div>
        </div>
    )
}