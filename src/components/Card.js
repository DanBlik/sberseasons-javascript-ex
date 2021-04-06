import React from 'react'

const Card = ({id, feature, dataAttribute}) => {

    return (
        <div {...dataAttribute}>
            {id + " " + feature}
        </div>
    )
}

export default Card