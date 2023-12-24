import { Card, Image, Group, Badge, Text, Button } from "@mantine/core"
import { IconMapPin } from "@tabler/icons-react"
import { notifications } from "@mantine/notifications"

function determineStars(rating) {
    let stars = {
        0: "small_0",
        1: "small_1",
        1.5: "small_1_half",
        2: "small_2",
        2.5: "small_2_half",
        3: "small_3",
        3.5: "small_3_half",
        4: "small_4",
        4.5: "small_4_half",
        5: "small_5"
    }

    return `/yelp_stars/${stars[rating]}@2x.png`
}

export default function RestaurantCard({ restaurant, session }) {
    let closedColor = restaurant.is_closed ? "red" : "green"
    let closed = restaurant.is_closed ? "Closed" : "Open"
    let { id, name, image_url, is_closed, url, review_count, rating, coordinates, price, location, phone } = restaurant

    const handleAdd = () => {
        let actRestObj = {
            yelp_id: id,
            name,
            image: image_url,
            is_closed,
            url,
            review_count,
            rating,
            price,
            phone,
            long: coordinates.longitude,
            lat: coordinates.latitude,
            location: location.display_address.join(" "),
        }

        fetch('/api/restaurant/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({data: actRestObj, email: session.user.email})
        }).then(() => {
            notifications.show({
                title: "Success!",
                message: `${name} added to your list`,
                color: 'green',
            })
        })
        
    }

    return (
        <Card
            withBorder
            radius="md"
            m={8}>
            <Card.Section>
                <Image src={image_url} alt={name} h={200} fit="cover" />
            </Card.Section>

            <Group justify="space-between" mt="md">
                <Text fw={500}>{name}</Text>
                <Badge variant="filled" color={closedColor}>{closed}</Badge>
            </Group>
            <div>
                <Group>
                    <IconMapPin size={18} className="-mr-3" />
                    <Text fz="xs" c="dimmed">
                        {restaurant.location.display_address.join(" ")}
                    </Text>
                </Group>
                <div className="flex flex-wrap">
                    {
                        restaurant.categories.map((category, index) => {
                            return <Badge key={index} variant="light" color="blue">{category.title}</Badge>
                        })
                    }
                </div>
                
            </div>


            <Card.Section mt="md" p="md" withBorder>
                <Group justify="space-between">
                    <div>
                        <Group>
                            {<Image src={determineStars(rating)} alt={name} h={20} w={100} fit="contain" />}
                            <Text fw={600} mx="-8">{rating}</Text>
                            <Text fz="s" c="dimmed">({review_count} reviews) </Text>
                        </Group>
                        <Text fz="xs" c="dimmed">Provided by Yelp</Text>
                    </div>
                    <Text fz="s" fw={300}>{price ? price : "?"}</Text>

                </Group>
            </Card.Section>
            <Button size="md" color="#f87365" variant="outline" mt="md" onClick={handleAdd}
            >Add to List</Button>
        </Card>)
}