import { getSession, useSession } from 'next-auth/react'
import DashboardLayout from '../layout/Dashboard'
import { useEffect, useState } from 'react'
import { ScrollArea, TextInput } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { getHotkeyHandler } from '@mantine/hooks'
import RestaurantCard from '../components/RestaurantCard'

let demoData = {
    id: 'y7yblnKXbLW2c-1f1qTV5Q',
    alias: 'sushi-adachi-milpitas',
    name: 'Sushi Adachi',
    image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/3Vp3SQt_YjjM0uwbRdwtSg/o.jpg',
    is_closed: false,
    url: 'https://www.yelp.com/biz/sushi-adachi-milpitas?adjust_creative=cgvo8ZSCzO5VOtVcT2dtbw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=cgvo8ZSCzO5VOtVcT2dtbw',
    review_count: 56,
    categories: [{ alias: 'japanese', title: 'Japanese' }],
    rating: 4.5,
    coordinates: { latitude: 37.41944401163271, longitude: -121.915679 },
    transactions: ['delivery', 'pickup'],
    location: {
        address1: '668 Barber Ln',
        address2: null,
        address3: '',
        city: 'Milpitas',
        zip_code: '95035',
        country: 'US',
        state: 'CA',
        display_address: ['668 Barber Ln', 'Milpitas, CA 95035']
    },
    phone: '+14084326270',
    display_phone: '(408) 432-6270',
    distance: 2657.2255594925314
}

export default function ProfileHome() {
    const { data: session } = useSession()
    const [value, setValue] = useState('')
    const [businesses, setBusinesses] = useState([])
    const [coords, setCoords] = useState({})

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                setCoords({ lat: position.coords.latitude, long: position.coords.longitude })
            });
        }
    }, [])

    const handleSearch = () => {
        const apiLink = `https://api.yelp.com/v3/businesses/search?latitude=${coords.lat}&longitude=${coords.long}&sort_by=best_match&limit=20&term=${value}`
        const apiKey = `otu6V4zEoL4Jppb3tWTE8tQCV0pnf7q9Ox_NUR2wZwcX6npV8-qv0bzZV9Tp6VqFrYWG0-Wwn2IBz55XnRbCkMGzRGqBEAF8rDT5pB6Wh0QRu4d-FAFtxkKMmcZiZXYx`
        fetch('/api/back', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ apiLink, apiKey })
        }).then(res => res.json()).then(data => {
            setBusinesses(data.businesses)
        })
    }



    return (
        <div className='flex flex-col p-8'>
            <h1 className='text-5xl mb-8'>Restaurants</h1>
            <TextInput
                placeholder='Search for recipes'
                leftSection={<IconSearch />}
                variant='filled'
                radius='lg'
                mt={4}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                onKeyDown={getHotkeyHandler([['enter', handleSearch]])}
            />
            <ScrollArea h={1000} className='p-4'>
                <div className="mt-4">
                    <div className="grid grid-cols-3 gap-4">
                        {businesses &&
                            businesses.map(business => (
                                <RestaurantCard restaurant={business} key={business.id} session={session} />
                            ))}
                    </div>
                </div>
            </ScrollArea>

            <div className="code-container max-h-screen overflow-y-auto pr-8"> {/* Use overflow-y-hidden to remove the scroll bar */}


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


ProfileHome.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

