import React from 'react';
import './Table.scss';
import Products from './Table.mockdata';

const headers: TableHeader[] = [
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price', right: true},
    {key: 'stock', value: 'Stock', right: true},
]

declare interface TableHeader {
    key: string
    value: string
    right?: boolean
}

type IndexedHeaders = {
    [key: string]: TableHeader
}

type OrganizedItem = {
    [key: string]: any
}

function organizeData(data: any[], headers: TableHeader[]): [OrganizedItem[],IndexedHeaders] {
    const indexHeaders: IndexedHeaders = {}

    headers.forEach(header => {
        indexHeaders[header.key]={
            ...header
        }
    })

    const headerKeysInOrder = Object.keys(indexHeaders)

    const organizedData = data.map(item => {
        const organizedItem: OrganizedItem = {}

        headerKeysInOrder.forEach(key => {
            organizedItem[key] = item[key];
        })

        organizedItem.$original = item;

        return organizedItem;
    })
    
    return [organizedData, indexHeaders];
}

const Table = () => {
    const [organizedData, indexHeaders] = organizeData(Products, headers)
    console.table(organizedData);
    console.table(indexHeaders);
    return <table className="AppTable">
       <thead>
           <tr>
            {
                headers.map(header => 
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
                    Object.keys(row).map(item => {
                        return item !== '$original' ? <td className={indexHeaders[item].right ? 'right' : ''}>{row[item]}</td> : null
                    })
                }
            </tr>
        })
       }
       </tbody>
    </table>;
}

export default Table;