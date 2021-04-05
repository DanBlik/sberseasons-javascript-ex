import React, {useState} from 'react'

const Card = ({id, feature}) => {
    const [dataAttr, setDataAttr] = useState(null)

    return (
        <div>
            {id + " " + feature}
        </div>
    )
}

export default Card