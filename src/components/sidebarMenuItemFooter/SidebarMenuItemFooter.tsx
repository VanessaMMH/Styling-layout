import React from 'react'
import rectangleIcon from '../../assets/img/rectangle.svg';
import './SidebarMenuItemFooter.scss'
export const SidebarMenuItemFooter = ({ titleMenu = '' }) => {
    return (
        <div className="itemList">
            <img
                className="item"
                src={rectangleIcon}
                alt="menugridIcon"
            />
            <p>{titleMenu}</p>
        </div>
    )
}
