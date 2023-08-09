import { getSession } from 'next-auth/react'
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'
import { TimeToNum } from '../../../util/type_helpers'
import DashboardLayout from '../layout/Dashboard'
import Image from 'next/image'
import { SideBarNavContext } from '../context/SideNavTabContext'
import { useContext } from 'react'

const example_data = { 'page': { 'article': { 'author': 'Cassie Best', 'description': 'Give the classNameic blueberry muffin a makeover by adding a crisp maple-sugar glaze, which sets to a cracked crust', 'id': '5199401', 'tags': [] }, 'recipe': { 'collections': ['Muffin', "Valentine's Day brunch", 'Easy muffin'], 'cooking_time': 6400, 'prep_time': 1200, 'serves': 0, 'keywords': ['Baking', 'Fruit muffin recipe', 'Maple syrup cake', 'Cupcakes', 'freezer-friendly muffins'], 'ratings': 90, 'nutrition_info': ['Added sugar 21g', 'Carbohydrate 37g', 'Kcal 240 calories', 'Protein 3g', 'Salt 0.6g', 'Saturated fat 5g', 'Fat 8g'], 'ingredients': ['plain flour', 'baking powder', 'bicarbonate of soda', 'granulated sugar', 'unsalted butter', 'buttermilk', 'egg', 'maple syrup', 'vanilla extract', 'blueberry', 'icing sugar'], 'courses': ['Afternoon tea', 'Breakfast', 'Brunch', 'Treat'], 'cusine': 'American', 'diet_types': [], 'skill_level': 'Easy', 'post_dates': '1435705200' }, 'channel': 'Recipe', 'title': 'Maple-glazed blueberry muffins' } }

export default function ProfileHome() {
    const [activeTab, setActiveTab] = useContext(SideBarNavContext)
    const { data: session } = useSession()
    setActiveTab('Home')

    const { cooking_time, prep_time, cusine } = example_data.page.recipe
    const { description } = example_data.page.article
    const { title } = example_data.page

    const totalTime = TimeToNum(cooking_time + prep_time)

    return (
        <div className="flex">
            <div className="">
                <div className="p-8">
                    <div className="flex p-11 justify-between">
                        <div className="">
                            <h1 className="text-4xl font-semibold">Welcome, {session.user.name}</h1>
                            <p className=" text-gray-500">Manage your recipes, favorites, and preferred choices here!</p>
                        </div>
                        <div className="flex gap-16">
                            <button onClick={signOut} className=''>Sign Out</button>
                            <Image src={session.user.image ?? "/blank.jpg"} width={64} height={64} alt="profile" className="rounded-full" ></Image>
                        </div>
                    </div>
                    <h1 className=" text-4xl font-medium">Recipe of the day...</h1>
                    <Link className="cursor-pointer " href='/profile/home'>
                        <div className="drop-shadow-lg bg-amber-700 flex justify-between rounded-3xl mt-4 transition ease-in-out delay-75 hover:scale-105 duration-200">
                            <div className=" p-12 text-white w-[30rem]">
                                <h1 className="font-bold text-3xl capitalize">{title}</h1>
                                <p className="pt-4">{description}</p>
                            </div>
                            <div className='flex flex-col justify-between items-end p-4 text-white'>
                                <p>{totalTime}</p>
                                <p>{cusine}</p>
                            </div>
                            <img src='/muffins.jpg' className="object-cover w-80 rounded-r-3xl"></img>
                        </div>
                    </Link>

                    <h1 className="text-4xl font-medium pt-8">Your Recipes</h1>
                    <div className="flex flex-wrap p-8 ">

                    </div>
                </div>
            </div>
        </div>
    )
}

ProfileHome.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
            redirect: {
                destination: '/api/auth/signin',
                permanent: false
            }
        }
    }

    return {
        props: {
            session
        }
    }
}
