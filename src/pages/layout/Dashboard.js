import SideNav from "../components/dashboard/SideNav";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-max overflow-y-auto">
            <SideNav />
            <main>{children}</main>
        </div>
    )
}