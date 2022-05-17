// import { FC } from 'react'
import React from "react";
import File from '../../interfaces/table.interface'
import  {FileItem}  from '../fileItem/FileItem'
import './DashboardTable.scss'

export interface FileProps {
    files: File[];
}
export const DashboardTable: React.FC<FileProps> = ({files}:FileProps) => {
    return (<div className="table-data">
            <table>
                <thead>
                    <tr >
                        <th>Name</th>
                        <th>Members</th>
                        <th>Last Modified</th>
                        <th> </th>                                          
                    </tr>
                </thead>
                <tbody>
                {files.map(({ id, names, members, lastModified, color }) => (
                    <FileItem 
                        id={id}
                        names={names}
                        members={members}
                        lastModified={lastModified}
                        color={color}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
}

