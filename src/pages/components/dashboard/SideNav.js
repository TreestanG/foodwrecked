
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@mantine/core";
import { IconHome2, IconToolsKitchen2 } from "@tabler/icons-react";
import { useState } from "react";


let tabs = [
    { icon: IconHome2, name: "Home", href: "/profile/home" },
    { icon: IconToolsKitchen2, name: "Explore Recipes", href: "/profile/recipes" },
    { icon: IconToolsKitchen2, name: "Add Recipe", href: "/profile/create" },
]

export default function SideNav() {
    const [active, setActive] = useState(0)

    return (
        <div className="flex-col hidden lg:flex  w-[20rem] h-screen divide-y-2 shadow-lg mr-8">
            <Link href="/" className="flex justify-center">
                <Image src='/chef.png' alt='chef-hat' width={100} height={100}></Image>
            </Link>
            {
                tabs.map((tab, index) => {
                    return <NavLink
                        key={index}
                        icon={<tab.icon />}
                        label={tab.name}
                        active={active === index}
                        onClick={() => setActive(index)}
                        href={tab.href}

                    />
                })
            }
        </div>
    )
}