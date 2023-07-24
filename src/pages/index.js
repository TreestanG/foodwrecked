import Image from 'next/image'
import RecipeCard from './components/RecipeCard'
import Recipes from '../../spreadsheet_recipes.json'

export default function Home() {

  return (
    <div className="flex justify-center">
      <div className="flex-col md:-translate-x-[20rem] pt-12">
        {
          Object.values(Recipes).map(r => {
            return <RecipeCard key={r.title} recipe={r} />
          })
        }
      </div>
    </div>
  )
}
