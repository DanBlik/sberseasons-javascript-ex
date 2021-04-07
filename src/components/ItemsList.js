import React from 'react'

const ItemsList = ({data}) => {
    return (
        <div data-container>
            {
                data.map(({id, feature}) => <div 
                            key={id}
                            id={id}
                            {...{[`data-featured-${feature}`]: ""}}>
                                {`${id} ${feature}`}
                            </div>   
                )
            }
        </div>
    )
}

export default ItemsList