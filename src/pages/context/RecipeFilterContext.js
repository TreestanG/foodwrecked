'use client';

import React, { createContext, useState, useCallback } from 'react';

export const RecipeFilterContext = createContext()
export const RecipeFilterProvider = ({ children }) => {
    const [filterCategories, setFilterCategories] = useState([])

    const addCategory = useCallback((category) => {
        setFilterCategories(currentFilterCat => [...currentFilterCat, category])
    }, [filterCategories])

    const removeCategory = useCallback((category) => {
        setFilterCategories(currentFilterCat => currentFilterCat.filter(c => c !== category))
    }, [filterCategories])
    
    return (
        <RecipeFilterContext.Provider value={[filterCategories, addCategory, removeCategory]}>
            {children}
        </RecipeFilterContext.Provider>
    )
}

