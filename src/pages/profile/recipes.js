import { getSession } from 'next-auth/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SideNav from '../components/dashboard/SideNav'

export default function ProfileHome() {
    const router = useRouter()
    const { data: session } = useSession()
    return <SideNav />
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
