import React from 'react'
import logo from '../../assets/img/logo.svg';
import './SidebarMenu.scss'
import { SidebarMenuItem } from '../sidebarMenuItem/SidebarMenuItem';
import { SidebarMenuItemFooter } from '../sidebarMenuItemFooter/SidebarMenuItemFooter';
import ItemList from '../../interfaces/itemMenu.interface';

export const SidebarMenu = () => {
  const sidebarMenu:ItemList[]=[
    {
      id: '1',
      titleMenu: 'Home',
    },
    {
      id: '2',
      titleMenu: 'My Files',
    },
    {
      id: '3',
      titleMenu: 'Recent Files',
    },
    {
      id: '4',
      titleMenu: 'Shared Files',
    },
    {
      id: '5',
      titleMenu: 'File Request',
    },
    {
      id: '6',
      titleMenu: 'Trash',
    },
  ]
  const sidebarMenuFooter:ItemList[]=[
    {
      id: '1',
      titleMenu: 'Upload files',
    },
    {
      id: '2',
      titleMenu: 'Upload folder',
    },
    {
      id: '3',
      titleMenu: 'New folder',
    },
    {
      id: '4',
      titleMenu: 'More',
    },
  ]
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img
          src={logo}
          alt="ravnIcon"
        />
      </div>
      <div className="sidebar__menu">
        {sidebarMenu.map(({titleMenu})=>(
          <SidebarMenuItem titleMenu={titleMenu} />
        ))}
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__footer--list">
        {sidebarMenuFooter.map(({titleMenu})=>(
          <SidebarMenuItemFooter titleMenu={titleMenu} />
        ))}
        </div>
        <div className="arrow-down"></div>

        <button type="button">
          <h4>Create New</h4>
          <svg className="svg-icon"
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M2.94203 0C2.90467 0 2.8744 0.0302787 2.8744 0.0676328V2.8744H0.0676328C0.0302787 2.8744 0 2.90467 0 2.94203V4.05797C0 4.09532 0.0302787 4.1256 0.0676328 4.1256H2.8744V6.93237C2.8744 6.96972 2.90467 7 2.94203 7H4.05797C4.09532 7 4.1256 6.96972 4.1256 6.93237V4.1256H6.93237C6.96972 4.1256 7 4.09532 7 4.05797V2.94203C7 2.90467 6.96972 2.8744 6.93237 2.8744H4.1256V0.0676328C4.1256 0.0302787 4.09532 0 4.05797 0H2.94203Z" fill="white" />
          </svg>
        </button>

      </div>

    </div>
  )
}
