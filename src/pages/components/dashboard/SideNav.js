import { IconHome2, IconToolsKitchen2, IconLogout, IconCompass, IconSoup } from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Divider } from "@mantine/core";
import { signOut } from "next-auth/react";

let tabs = [
    { icon: IconHome2, label: "Home", link: "/profile/home" },
    { icon: IconCompass, label: "Explore Recipes", link: "/profile/recipes" },
    { icon: IconToolsKitchen2, label: "Add Recipe", link: "/profile/create" },
    { icon: IconSoup, label: "Restaurants", link: "/profile/restaurant" },
];

export default function SideNav() {
    const [active, setActive] = useState('Home');

    return (
        <div className="hidden w-1/6 h-screen top-0 left-0 mx-4 mr-8 md:flex flex-col justify-between border-r-2 pr-4 border-gray-100 sticky">
            <div>
                <div className="flex justify-center">
                    <Link href="/">
                        <Image
                            src="/chef.png"
                            height={100}
                            width={100}
                        />
                    </Link>

                </div>

                <Divider className="py-4" />

                <div className="flex flex-col content-between h-fit">
                    {tabs.map((tab, index) => (
                        <Link href={tab.link} key={index} className={`flex items-center space-x-2 p-2 py-4 rounded-md ${active === tab.label ? 'bg-uni-brand text-white' : 'text-gray-700'} hover:bg-gray-200 hover:text-gray-900`}
                            onClick={() => setActive(tab.label)}>


                            <tab.icon className="w-5 h-5" />
                            <span>{tab.label}</span>
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <Divider />
                <a className="flex items-center space-x-2 p-2 py-12 rounded-md text-gray-700"
                    href="#"
                    onClick={signOut}>
                    <IconLogout className="w-5 h-5" />
                    <span>Logout</span>
                </a>
            </div>

        </div>
    );
}