import Image from 'next/image'
import RecipeCard from './components/RecipeCard'
import fs from 'fs'

let recipes = [
  {
    "cuisine": "Southern",
    "link": "https://www.google.com/url?q=http://www.food.com/recipe/almost-boston-market-creamed-spinach-77206&sa=D&source=editors&ust=1690137462632765&usg=AOvVaw2SCTCCHB5pqzVltay287cY",
    "meal": "Side",
    "protein": "None",
    "serving": "4",
    "title": "Almost Boston Market Creamed Spinach"
  },
  {
    "cuisine": "Mediterranean",
    "link": "https://www.google.com/url?q=http://minimalistbaker.com/simple-baba-ganoush/&sa=D&source=editors&ust=1690137462633264&usg=AOvVaw1-MV6IW0etl2WPwS6PLyAA",
    "meal": "Condiment",
    "protein": "none",
    "serving": "4",
    "title": "Baba Ganoush"
  },
  {
    "cuisine": "American",
    "link": "https://www.google.com/url?q=http://www.skinnytaste.com/bacon-wrapped-green-bean-bundles/&sa=D&source=editors&ust=1690137462633765&usg=AOvVaw3e80QxOrxK01vqOM7fepYn",
    "meal": "Side",
    "protein": "Bacon",
    "serving": "4",
    "title": "Bacon-wrapped Green Bean Bundles"
  },
  {
    "cuisine": "Mediterranean",
    "link": "https://www.google.com/url?q=http://www.myrecipes.com/recipe/bacon-onion-brown-lentil-skillet&sa=D&source=editors&ust=1690137462637893&usg=AOvVaw2ywlqy7C3ZuFAg_Rasqyli",
    "meal": "Entr\u00e9e",
    "protein": "Bacon",
    "serving": "4",
    "title": "Bacon, Onion, and Brown Lentil Skillet"
  },
  {
    "cuisine": "American",
    "link": "https://www.google.com/url?q=http://www.skinnytaste.com/2011/04/healthy-baked-chicken-nuggets.html&sa=D&source=editors&ust=1690137462638686&usg=AOvVaw20gWEoKIvJ0Tm3870Va2eB",
    "meal": "Protein",
    "protein": "Chicken breast",
    "serving": "4",
    "title": "Baked Chicken Nuggets"
  }
]

export default function Home() {
  data = []
  fs.createReadStream('./spreadsheet_data.csv')
    .pipe(parse({ delimiter: ', ', columns: true, ltrim: true }))
    .on('data', function (csvrow) {
      data.push(csvrow)
    })

  console.log(data)

  return (
    <div className="flex justify-center">
      <div className="flex-col md:-translate-x-[20rem] pt-12">
        {
          recipes.map(r => {
            return <RecipeCard key={r.title} recipe={r} />
          })
        }

      </div>
    </div>
  )
}
