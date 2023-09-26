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
            <button onClick={setTab} className={`flex hover:bg-slate-200 hover:cursor-pointer  w-full items-baseline p-4 pl-12 ml-6 rounded-lg ${activeTab === name ? "text-slate-950 bg-gray-200" : "text-gray-400"}`}>
                <p className={`text-xl font-medium text-center`}>{name}</p>
            </button>
        </Link>

    )
}