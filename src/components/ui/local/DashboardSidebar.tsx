import React from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { MdDashboard } from "react-icons/md";
import { FaCubes } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";

export default function DashboardSidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const PathList = [
        {
            pathname: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard />
        },
        {
            pathname: "orders",
            path: "/dashboard/orders",
            icon: <FaCubes />
        },
        {
            pathname: "products",
            path: "/dashboard/products",
            icon: <IoCartSharp />
        }
    ]


    return (
        <>
            {PathList.map((e: any) => {
                let active = "bg-primary text-secondary";
                let nonAcitive = "hover:underline";
                return (
                    <div
                        onClick={() => { router.push(e.path) }}
                        className={`p-2 px-4 rounded font-medium capitalize cursor-pointer flex items-center gap-2 ${pathname == e.path ? active : nonAcitive}`}
                    >
                        {e.icon}
                        {e.pathname}
                    </div>
                )
            })}
        </>
    )
}
