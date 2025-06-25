import React from "react";
import { Outlet } from "react-router-dom";
import ArtisanDashboardNavbar from "../Artisan/DashboardPages/Nav";







export default function ArtisanDashboardLayout () {
    return (
        <>
        <ArtisanDashboardNavbar />
        <div className="artisan-oulet" style={{paddingTop: "90px", background: " #F7F7F7"}}>
        <Outlet />
        </div>
        </>
    )
}