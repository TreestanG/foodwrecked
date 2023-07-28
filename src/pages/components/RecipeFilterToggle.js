import React, { useState, useContext } from 'react'
import { RecipeFilterContext } from '../context/RecipeFilterContext'
import { filter } from 'fontawesome'

export default function RecipeFilterToggle({ category }) {

    const [ filterCategories, addCategory, removeCategory ] = useContext(RecipeFilterContext)
    const [active, setActive] = useState(false)

    const toggle = () => {
        let newActive = !active
        setActive(newActive)
        if (newActive) {
            addCategory(category)
        } else {
            removeCategory(category)
        }
    }

    return (
        <button onClick={toggle} className={`rounded-full px-4 py-1 border-2 flex ${active ? 'border-uni-green' : 'border-slate-200'}`}>
            <p className={`${active ? 'text-uni-green' : 'text-black'}`}>{category}</p>
        </button>
    )
}