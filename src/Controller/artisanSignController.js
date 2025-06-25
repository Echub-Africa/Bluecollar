import React from "react";
import { Outlet } from "react-router-dom";

import { styled } from "styled-components";
import ArtisanSignNav from "../Artisan/ArtisanSignNav";




export default function ArtisanSignDashboardLayout() {

  return (
    <Wrapper>
      <div>
        <ArtisanSignNav />
        <Outlet />
      </div>
    
    </Wrapper>
  );
}
const Wrapper = styled.div`
  
  
`;
