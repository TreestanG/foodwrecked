import { getSession } from 'next-auth/react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import SideNav from '../../components/dashboard/SideNav'
import DashboardLayout from '../layout/Dashboard'

export default function ProfileHome() {
    const router = useRouter()
    const { data: session } = useSession()
    return <>
        
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

