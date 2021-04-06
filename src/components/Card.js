import React, {useState} from 'react'

const Card = ({id, feature, dataAttribute}) => {
    const [dataAttr] = useState({[dataAttribute]: ""})

    return (
        <div {...dataAttr}>
            {id + " " + feature}
        </div>
    )
}

export default Card