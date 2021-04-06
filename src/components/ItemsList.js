import React from 'react'
import Card from './Card'
import data from '../data'

const ItemsList = () => {
    const sortedData = data.reduce((acc, currentDataElement) => {
        const [others, penultimates, lasts] = acc
        let {id, feature} = currentDataElement
      
        switch (currentDataElement.feature) {
          case "last":
            lasts.push(<Card key={id} id={id} feature={feature} dataAttribute={`data-featured-${feature}`}/>)
            break
          case "penultimate":
            penultimates.push(<Card key={id} id={id} feature={feature} dataAttribute={`data-featured-${feature}`}/>)
            break
          default:
            others.push(<Card key={id} id={id} feature={feature} dataAttribute={`data-featured-${feature}`}/>)
        }
        
        return acc
      }, [[],[],[]])
          .map(el => el.sort((a,b) => b.props.id - a.props.id))
          .flat()

    return (
        <div data-container>
            {
                sortedData
            }
        </div>
    )
}

export default ItemsList