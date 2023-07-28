import RecipeCard from './components/RecipeCard'
import recipes from '../../data/spreadsheet_recipes.json'
import RecipeFilter from './components/RecipeFilter'
import { RecipeFilterProvider, RecipeFilterContext } from './context/RecipeFilterContext'
import { useContext } from 'react'

export default function wrappedHome() {
  return (
    <RecipeFilterProvider>
      <Home />
    </RecipeFilterProvider>
  )
}


function Home() {
  const [filteredCategories] = useContext(RecipeFilterContext)

  return (
    <div className="flex justify-center gap-32">
      <div className="flex-col pt-12">
        {
          Object.values(recipes)
          .filter(r => {
            if (filteredCategories.length === 0) return true
            let recipeCategories = [r.cuisine, r.meal, r.protein]
            return filteredCategories.every(c => recipeCategories.includes(c))
          })
          .map(r => {
            return <RecipeCard key={r.name} recipe={r} />
          })
        }
      </div>
      <RecipeFilter className="hidden md:block" />
    </div>
  )
}
