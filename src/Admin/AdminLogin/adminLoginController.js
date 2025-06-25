import React from "react";
import { Outlet } from "react-router-dom";

import { styled } from "styled-components";
import AdminSignNav from "./AdminNavSign";




export default function AdminLoginDashboardLayout() {

  return (
    <Wrapper>
      <div>
        <AdminSignNav />
        <Outlet />
      </div>
    
    </Wrapper>
  );
}
const Wrapper = styled.div`
  
  
`;
