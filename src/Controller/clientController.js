import React from "react";
import { Outlet } from "react-router-dom";
import ClientDashboardNavbar from "../Client/ClientNav";







export default function ClientDashboardLayout () {
    return (
        <>
        <ClientDashboardNavbar />
        <div className="artisan-oulet" style={{paddingTop: "90px", background: " #F7F7F7"}}>
        <Outlet />
        </div>
        </>
    )
}