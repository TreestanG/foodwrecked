
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
        <SideBarNavProvider>
            <div class="flex-col hidden lg:flex  w-[20rem] h-screen divide-y-2">
                <Link href="/" class="flex justify-center">
                    <Image src='/chef.png' alt='chef-hat' width={100} height={100}></Image>
                </Link>
                {
                    tabs.map(tab => {
                        return <SideNavTab key={tab[0]} name={tab[0]} icon={tab[1]} link={tab[2]} />
                    })
                }
            </div>
        </SideBarNavProvider>
    )
}