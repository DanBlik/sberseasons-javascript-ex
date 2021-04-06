import React from 'react'

const ItemsList = ({sortedData}) => {
    return (
        <div data-container>
            {
                sortedData.map(({id, feature}) => {
                    return (
                        <div key={id} id={id} feature={feature} {...{[`data-featured-${feature}`]: ""}}>{id + " " + feature}</div>
                    )
                })
            }
        </div>
    )
}

export default ItemsList