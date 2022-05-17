import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { StorageTable } from '../sidebarStorageTable/StorageTable';
import Document from'../../interfaces/storage.interface'
import './SidebarStorage.scss'
ChartJS.register(ArcElement, Tooltip, Legend);


export const SidebarStorage = ({ name = '' }) => {
  const options = {
    events: []
  }
  const data = {
    datasets: [

      {
        data: [15, 30, 23, 25],
        backgroundColor: [
          '#4AC29D',
          '#FF9F00',
          '#BCBECA',
          '#689FF8',
        ],

        borderWidth: 1,
        cutout: "90%",
        borderRadius: 60,
        rotation: 10,
        spacing: 15,
        borderColor: "transparent",
      },

    ],
  };


const initialState: Document[] = [
  {
    id: '1',
    document: 'Documents',
    file: 720,
    storage: 200,
    color: 'orange',
  },
  {
    id: '2',
    document: 'Documents',
    file: 720,
    storage: 200,
    color: 'blue',
  },
  {
    id: '3',
    document: 'Documents',
    file: 720,
    storage: 200,
    color: 'green',
  },
  {
    id: '4',
    document: 'Documents',
    file: 720,
    storage: 200,
    color: 'gray',
  },
 
]
  return (
    <div className='sidebarStorage'>
      <div className="sidebarStorage__header">
        <div className="sidebarStorage__icons">
          <div className="icons-rectangle"></div>
          <div className="icons-rectangle"></div>
        </div>
        <div className="sidebarStorage__icon-admin">
          <h4>{name}</h4>
          <div className="icon-admin__circle"></div>
        </div>

      </div>
      <div className="sidebarStorage__body">
        <h1>Storage</h1>
        <div className="sidebarStorage__chart">
            <Doughnut data={data} options={options} />
            <div className="sidebarStorage__circle">
              <div className="number-circle">
                85 <span className='porcentaje'>%</span>
              </div>
              <div className="subnumber">
                Used
              </div>
            </div>
          </div>
        <p className='storage'>420.2 GB of 500 GB used</p>
        <div className="Storage__table">
          <StorageTable documents={initialState}/>

        </div>
      </div>
      <div className="sidebarStorage__footer">
        <div className="logo"></div>
        <h3>Buy more space now!</h3>
        <p>Upgrade to cloud premium</p>
        <button className='btn-account'>Upgrade Account!</button>

      </div>
    </div>
  )
}
