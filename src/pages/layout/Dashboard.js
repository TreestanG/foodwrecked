import SideNav from "../components/dashboard/SideNav";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex h-max overflow-y-auto w-full">
            <SideNav />
            <main className="w-full">{children}</main>
        </div>
    )
}