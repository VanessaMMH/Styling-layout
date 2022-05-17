import React from 'react'
import Card from '../../interfaces/card.interface'
import File from '../../interfaces/table.interface'
import { DashboardCard } from '../dashboardCard/DashboardCard'
import { DashboardCardFooter } from '../dashboardCardFooter/DashboardCardFooter'
import { DashboardTable } from '../dashboardTable/DashboardTable'
import './Dashboard.scss'
import data from './data.json'


export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__search">
        <div className="dashboard__container">
          <div className="rectangle-icon"></div>
          <span>Search</span>
        </div>
      </div>
      <div className="dashboard__title">
        <h1>Recently Used</h1>
        <div className="dashboard__container">
          <div className="rectangle-icon"></div>
          <div className="rectangle-icon"></div>
        </div>
      </div>

      <div className="dashboard__card-grid">
        {data.recentlyUsed.map(({title, description })=>
          <DashboardCard
            title={title}
            description={description}
          />
        )}
      </div>
      <div className="dashboard__title">
        <h1>Recent Files</h1>
        <h3>View all</h3>
      </div>
      <DashboardTable files={data.initialState} />
      <div className="dashboard__title">
        <h1>Shared with me</h1>
        <h3>View all</h3>
      </div>
      <div className="dashboard__card-grid">
        {data.sharedWithMe.map(({ title, description }) => (
          <DashboardCardFooter
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  )
}
