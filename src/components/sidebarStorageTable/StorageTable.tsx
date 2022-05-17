// import { FC } from 'react'
import React from "react";
import Document from '../../interfaces/storage.interface'
import { ItemListStorage } from '../ItemListStorage/ItemListStorage'

import './StorageTable.scss'

export interface DocumentProps {
    documents: Document[];
}
export const StorageTable: React.FC<DocumentProps> = ({ documents }: DocumentProps) => {
    return (<div className="storage__table-data">
        <table>
            <tbody>
                {documents.map(({ id, document, file, storage, color }) => (
                    <ItemListStorage
                        id={id}
                        document={document}
                        file={file}
                        storage={storage}
                        color={color}
                    />
                ))}
            </tbody>
        </table>
    </div>
    )
}

