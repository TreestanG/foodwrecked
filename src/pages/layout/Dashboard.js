import SideNav from "../components/dashboard/SideNav";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex">
            <SideNav />
            <main>{children}</main>
        </div>
    )
}