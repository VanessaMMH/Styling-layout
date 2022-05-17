import React from 'react'
import Document from '../../interfaces/storage.interface'
import './ItemListStorage.scss'


export const ItemListStorage: React.FC<Document> = (documents: Document) => {

    const {
        document,
        file,
        storage,
        color,
    } = documents

 
    return (
        <tr className='storage__row'  >
            <td className='storage__cell'>
                <div 
                    className="rectangle-table" 
                    style={{
                        backgroundColor: color
                    }}
                ></div>
                <div className="cell__text">
                    <h4>{document}</h4>
                    <h5>{`${file} files`}</h5>
                </div>
            </td>
            <td >
                <h5 className='storage__gb'>{`${storage} GB`}</h5>
            </td>
        </tr>
    )
}
