import React from 'react';
import organizeData from '../../util/organizeDataForTable';
import './Table.scss';

export interface TableHeader {
    key: string
    value: string
    right?: boolean
}

declare interface TableProps {
    headers: TableHeader[],
    data: any[]

    enabledAction?: boolean,

    onDelete?: (item: any) => void
    onDetails?: (item: any) => void
    onEdit?: (item: any) => void
}



const Table: React.FC<TableProps> = (props) => {
    const [organizedData, indexHeaders] = organizeData(props.data, props.headers)
    return <table className="AppTable">
       <thead>
           <tr>
            {
                props.headers.map(header => 
                    <th 
                        className={header.right ? 'right' : ''} 
                        key={header.key}>{header.value}
                    </th>)
            }
           </tr>
       </thead> 
       <tbody>
       {
           organizedData.map((row,i) => {
               
            return <tr key={i}>
                {
                    Object.keys(row).map((item, i) => {
                        return item !== '$original' ? <td  key={row.$original.id+i} className={indexHeaders[item].right ? 'right' : ''}>{row[item]}</td> : null
                    })
                }
            </tr>
        })
       }
       </tbody>
    </table>;
}

export default Table;