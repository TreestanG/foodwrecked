import { Badge, Card, Group, Text } from "@mantine/core"
import Image from "next/image"

export default function RecipeCard({ recipe }) {

    let { name, cuisine, diffColor, skill_level, diet_type, ingredients} = recipe
    const image = recipe.images
    if(!ingredients) ingredients = []

    return <div className="m-2">
        <Card shadow="sm" padding="md" radius="lg" withBorder m="md" >
            {
                image ? <Card.Section>
                <Image src={image} height={240} width={330} alt="recipe" />
            </Card.Section> : null

            }
            
            <Group justify="space-between">
                <div>
                    <Text fw={500} pt="md">{name}</Text>
                    <Text size="md" color="gray" pb="sm">{cuisine}</Text>
                </div>
                
            </Group>

        </Card>
    </div>
}