
import { useSession } from "next-auth/react";
import Link from "next/link";
import { SideBarNavProvider } from "@/pages/context/SideNavTabContext";
import { faHouse, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { BookOpenIcon, HomeIcon } from '@heroicons/react/outline'
import SideNavTab from "./SideNavTab";
import Image from "next/image";

let tabs = [
    ["Home", HomeIcon, "/profile/home"],
    ["Recipes", BookOpenIcon, "/profile/recipes"]
]

export default function SideNav() {
    return (
        <div className="sticky z-50 flex-col hidden lg:flex w-[20rem] h-screen shadow-lg">
            <Link href="/" className="flex justify-center">
                <Image src='/chef.png' alt='chef-hat' width={100} height={100}></Image>
            </Link>

            <div className="divide-y-2 ">
                {
                    tabs.map(tab => {
                        return <SideNavTab key={tab[0]} name={tab[0]} icon={tab[1]} link={tab[2]} />
                    })
                }
            </div>
        </div>
    )
}