import React from 'react';
import { SidebarStorage } from './components/sidebarStorage/SidebarStorage';
import { SidebarMenu } from './components/sidebarMenu/SidebarMenu';
import { Dashboard } from './components/dashboard/Dashboard';


function App() {
  return (
    
    <>
      <SidebarMenu />
      <Dashboard/>
      <SidebarStorage name='Mayra' />
    </>
  );
}

export default App;
