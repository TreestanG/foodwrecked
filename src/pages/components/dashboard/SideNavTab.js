import { SideBarNavContext } from "@/pages/context/SideNavTabContext";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideNavTab({ name, icon, link }) {
    const [activeTab, setActiveTab] = useContext(SideBarNavContext)

    const setTab = () => {
        setActiveTab(name)
    }
    return (
        <Link href={link}>
            <button onClick={setTab} class={`flex hover:bg-slate-200 hover:cursor-pointer w-full items-baseline p-8 pl-12  ${activeTab === name ? "text-slate-950 bg-slate-200" : "text-gray-400"}`}>
                <p class={`text-xl font-medium`}>{name}</p>
            </button>
        </Link>

    )
}