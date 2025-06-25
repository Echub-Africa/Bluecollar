import React from "react";
import { Outlet } from "react-router-dom";
import CompanyDashboardNavbarr from "../company/CompanyNav";







export default function CompanyDashboardLayout () {
    return (
        <>
    <CompanyDashboardNavbarr />
        <div className="artisan-oulet" style={{paddingTop: "90px", background: " #F7F7F7"}}>
        <Outlet />
        </div>
        </>
    )
}