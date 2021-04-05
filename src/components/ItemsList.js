import React, {useState} from 'react'
import Card from './Card'
import data from '../data'

const ItemsList = () => {

    const [dataItems, setDataItems] = useState(data)

    return (
        <div data-container>
            {dataItems.map(({feature, id}) => <Card key={id} id={id} feature={feature}></Card>)}
        </div>
    )
}

export default ItemsList