import React from 'react'
import Card from './Card'
import data from '../data'

const ItemsList = () => {
    const sortedData = data.reduce((acc, currentDataElement) => {
        const [others, penultimates, lasts] = acc
        const {id, feature} = currentDataElement

        switch (currentDataElement.feature) {
          case "last":
            lasts.push({id, feature, dataAttribute: `data-featured-${feature}`})
            break
          case "penultimate":
            penultimates.push({id, feature, dataAttribute: `data-featured-${feature}`})
            break
          default:
            others.push({id, feature, dataAttribute: `data-featured-${feature}`})
        }
        
        return acc
      }, [[],[],[]])
          .map(el => el.sort((a,b) => b["id"] - a["id"])).flat()

    return (
        <div data-container>
            {
                sortedData.map(({id, feature, dataAttribute}) => <Card key={id} id={id} feature={feature} dataAttribute={{[dataAttribute]: ""}}/>)
            }
        </div>
    )
}

export default ItemsList