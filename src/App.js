import ItemsList from "./components/ItemsList"
import data from './data'

function App() {
  const sortedData = data.reduce((acc, currentDataElement) => {
    const [others, penultimates, lasts] = acc
    const {id, feature} = currentDataElement

    switch (currentDataElement.feature) {
      case "last":
        lasts.push({id, feature})
        break
      case "penultimate":
        penultimates.push({id, feature})
        break
      default:
        others.push({id, feature})
    }
    
    return acc
  }, [[],[],[]])
      .map(el => el.sort((a,b) => b["id"] - a["id"])).flat()

  return (
    <div className="App">
      <ItemsList sortedData={sortedData}/>
    </div>
  );
}

export default App;
