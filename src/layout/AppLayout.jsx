import React from 'react'
import AppSidebar from './AppSidebar'
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { ThemeProvider } from "../context/ThemeContext";

import { Outlet } from "react-router";
import Backdrop from './Backdrop';
import AppHeader from './AppHeader';

const LayoutContent=()=>{
  const {isExpanded, isHovered, isMobileOpen}=useSidebar();
  return (
    <div className='min-h-screen xl:flex'>
      <div>
        <AppSidebar/>
        <Backdrop/>
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${isExpanded || isHovered ? "lg:ml-[290px]":"lg:ml-[90px]"}
        ${isMobileOpen ? "ml-0":" "}`}
      >
        <AppHeader/>
        <div className='p-4 mx-auto max-w-(--brakpoint-2xl) md:p-6'>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <SidebarProvider>
      <ThemeProvider>
        <LayoutContent />
      </ThemeProvider>

    </SidebarProvider>
  )
}

export default AppLayout
