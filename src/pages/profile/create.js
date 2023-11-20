import { getSession, useSession } from 'next-auth/react'
import DashboardLayout from '../layout/Dashboard'
import { TextInput, Text, Textarea, Select, NumberInput, TagsInput, Group, NativeSelect, FileInput, Chip, Button, Collapse, Anchor, Badge, Card } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import Image from 'next/image'
import RecipeCard from '../components/RecipeCard'

export default function AddRecipe() {
    const { data: session } = useSession()

    const form = useForm({
        initialValues: {
            collections: [],
            cooking_time: 0,
            instructions: [],
            prep_time: 0,
            serves: 0,
            keywords: [],
            rating: 5,
            nutrition_info: [],
            ingredients: [],
            courses: [],
            cuisine: '',
            diet_types: [],
            skill_level: 'Easy',
            post_dates: new Date(),
            images: '',
        }
    })

    let { name, instructions, ingredients, cuisine, diet_type, skill_level, image, author, prep_time, cooking_time, serving_size, keywords, notes } = form.values

    image = image ? URL.createObjectURL(image) : ''


    const [opened, { toggle }] = useDisclosure(false)

    let diffColor = "green"
    if (skill_level == "Intermediate") {
        diffColor = "yellow"
    } else if (skill_level == "Hard") {
        diffColor = "red"
    }

    const recipe = {
        image,
        name,
        cuisine,
        diffColor,
        skill_level,
        diet_type,
    }

    return (
        <div className='p-8'>
            <h1 className="text-4xl font-medium">Add a Recipe</h1>
            <Group>
                <form onSubmit={form.onSubmit((values) => {
                    if (!Array.isArray(values.instructions)) {
                        values.instructions = values.instructions.split('\n')
                    }

                    fetch('/api/recipe/add', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ recipe: values, author: session.user.email })
                    }).then((res) => res.json()).then((data) => {
                        notifications.show({
                            title: "Recipe Added!",
                            message: "Your recipe was successfully added!",
                        })
                    })
                })}>
                    <TextInput
                        required
                        label="Recipe Name"
                        placeholder="Enter recipe name"
                        mt="xl"
                        {...form.getInputProps('name')}
                    />

                    <Textarea
                        autosize
                        placeholder="Enter recipe instructions here"
                        description="Seperate each step with a new line"
                        label="Instructions"
                        minRows={4}
                        required
                        mt="md"
                        {...form.getInputProps('instructions')}
                    />

                    <TagsInput
                        label="Ingredients"
                        description="Press enter to add an ingredient."
                        mt="md"
                        clearable
                        limit={10}
                        required
                        {...form.getInputProps('ingredients')}
                    />

                    <Select
                        label="Cuisine"
                        placeholder="Enter cuisine"
                        mt="md"
                        data={['American', 'Chinese', 'Japanese', 'Indian', 'Mexican', 'Greek', "French", "Korean"]}
                        maxDropdownHeight={200}
                        searchable
                        nothingFoundMessage="Nothing here... Try searching for something else."
                        required
                        {...form.getInputProps('cuisine')}
                    />

                    <Select
                        label="Diet Type"
                        description="Scroll to see more"
                        placeholder="Enter diet type"
                        mt="md"
                        data={["Vegetarian", "Vegan", "Gluten Free", "Keto", "Paleo", "Pescatarian", "Protein"]}
                        maxDropdownHeight={200}
                        searchable
                        nothingFoundMessage="Nothing here... Try searching for something else."
                        {...form.getInputProps('diet_types')}
                    />

                    <NativeSelect
                        label="Skill Level"
                        placeholder="Enter skill level"
                        mt="md"
                        data={["Easy", "Intermediate", "Hard"]}
                        required
                        {...form.getInputProps('skill_level')}
                    />

                    <FileInput
                        label="Upload Image"
                        mt="md"
                        mb="md"
                        {...form.getInputProps('image')}
                    />

                    <Anchor onClick={toggle} >More Options</Anchor>

                    <Collapse in={opened}>
                        <TextInput
                            placeholder="Enter recipe author"
                            label="Author"
                            mt="md"
                            {...form.getInputProps('author')}
                        />

                        <NumberInput
                            label="Prep Time"
                            placeholder="Enter prep time in minutes"
                            suffix=" minute(s)"
                            mt="md"
                            {...form.getInputProps('prep_time')}
                        />

                        <NumberInput
                            label="Cooking Time"
                            placeholder="Enter cooking time in minutes"
                            suffix=" minute(s)"
                            mt="md"
                            {...form.getInputProps('cooking_time')}
                        />

                        <NumberInput
                            label="Serving SIze"
                            placeholder="Enter serving size"
                            mt="md"
                            suffix=" people"
                            {...form.getInputProps('serves')}
                        />

                        <TagsInput
                            label="Keywords"
                            description="Press enter to add a keyword. You can add up to 5 keywords."
                            maxLength="10"
                            maxTags={5}
                            mt="md"
                            clearable
                            {...form.getInputProps('keywords')}
                        />


                        <Textarea
                            label="Notes"
                            placeholder="Enter notes here"
                            maxRows={5}
                            minRows={2}
                            mt="md"
                            {...form.getInputProps('notes')}
                        />

                    </Collapse>

                    <Group mt="lg" justify='space-between'>
                        <Chip >Make it public!</Chip>
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>

                <RecipeCard 
                    recipe={recipe}
                /> 

            </Group>

        </div>
    )
}

AddRecipe.getLayout = function getLayout(page) {
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
