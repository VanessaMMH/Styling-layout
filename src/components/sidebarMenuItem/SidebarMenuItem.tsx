import React from 'react'
import rectangleIcon from '../../assets/img/rectangle.svg';
import './SidebarMenuItem.scss'
export const SidebarMenuItem = ({titleMenu=''}) => {
    return (
        <>
            <a href='#'>
                <img
                    className="sidebar__icon-rectangle"
                    src={rectangleIcon}
                    alt="rectangleIcon"
                />
                <p>{titleMenu}</p>                
            </a>
        </>
    )
}
