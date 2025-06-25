import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../GuestPages/Nav";
import Footer from "../GuestPages/Footer";






export default function General () {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}