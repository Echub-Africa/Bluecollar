import React from "react";
import { Outlet } from "react-router-dom";
// import ArtisanDashboardNavbar from "../Artisan/DashboardPages/Nav";
import AdminDashboardNavbar from "../Admin/AdminPages/AdminNav";







export default function AdminDashboardLayout () {
    return (
        <>
        <AdminDashboardNavbar />
        <div className="artisan-oulet" style={{paddingTop: "90px", background: " #F7F7F7"}}>
        <Outlet />
        </div>
        </>
    )
}