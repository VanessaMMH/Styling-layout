import React from 'react'
import '../dashboardCard/DashboardCard.scss'
import './DashboardCardFooter.scss'
export const DashboardCardFooter = ({ title = '', description = '' }) => {
    return (

        <div className="footer">
            <div className=" header">
                <div className="container footer__container">
                    <div className="rectangle"></div>
                </div>
                <div className="container footer__container" >
                    <div className="circle one"></div>
                    <div className="circle two"></div>
                </div>
            </div>
            <div className="dashboardCard__footer">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>

    )
}
