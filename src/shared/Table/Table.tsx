import React from 'react';
import organizeData from '../../utils/organizeDataForTable';
import Button from '../Button';
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
            {
                props.enabledAction
                    && <th className="right">
                        Actions
                    </th>
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
                {
                    props.enabledAction
                    && <td className="actions right">
                        {
                            props.onEdit
                            && <Button onClick={() => props.onEdit && props.onEdit(row)}>
                                Edit
                            </Button>
                        }
                        {
                            props.onDetails
                            && <Button onClick={() => props.onDetails && props.onDetails(row)}>
                                Detail
                            </Button>
                        }
                        {
                            props.onDelete
                            && <Button onClick={() => props.onDelete && props.onDelete(row)}>
                                Delete
                            </Button>
                        }
                        
                    </td>
                }                
            </tr>
        })
       }
       </tbody>
    </table>;
}

export default Table;