import SideNav from "../components/dashboard/SideNav";
import { SideBarNavProvider } from "../context/SideNavTabContext";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-max">\
            <SideBarNavProvider>
                <SideNav />
                <main>{children}</main>
            </SideBarNavProvider>
        </div>

    )
}