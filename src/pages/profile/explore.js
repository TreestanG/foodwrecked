import { getSession } from 'next-auth/react'
import DashboardLayout from '../layout/Dashboard'
import { useEffect, useState } from 'react'
import { TextInput, rem } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

export default function Recipes() {
    const [restaurant, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const recipesData = await fetch('/api/restaurant/find').then(res => res.json())

                setRecipes(recipesData);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className="p-2 pt-4 w-full">
            <div className="flex flex-wrap w-full">
                <TextInput
                    leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} />}
                    leftSectionPointerEvents='none'
                    style={{width: '50%'}}
                />
            </div>

            <div className="flex flex-wrap ">
                hello
                hello
            </div>

        </div>
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


Recipes.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

