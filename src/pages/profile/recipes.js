import { getSession } from 'next-auth/react'
import DashboardLayout from '../layout/Dashboard'
import { prisma } from '../api/auth/[...nextauth]'
import RecipeCard from '../components/RecipeCard'
import { useEffect, useState } from 'react'

export default function ProfileHome() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const recipesData = await fetch('/api/recipe/find').then(res => res.json())

                setRecipes(recipesData);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    const recipeData = recipes.map(recipe => {
        return {
            ...recipe, diffColor: recipe.difficulty === 'Easy' ? 'green' : recipe.difficulty === 'Intermediate' ? 'yellow' : 'red'
        }
    })

    return <>
        {
            recipeData.map(recipe => {
                return <RecipeCard recipe={recipe} key={recipe.name} />
            })
        }
    </>
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


ProfileHome.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

