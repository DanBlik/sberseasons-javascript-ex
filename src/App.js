import ItemsList from "./components/ItemsList"
import data from './data'

function App() {
  const sortedData = data.reduce((acc, currentDataElement) => {
    const [others, penultimates, lasts] = acc

    switch (currentDataElement.feature) {
      case "last":
        lasts.push(currentDataElement)
        break
      case "penultimate":
        penultimates.push(currentDataElement)
        break
      default:
        others.push(currentDataElement)
    }
    
    return acc
  }, [[],[],[]])
      .map(el => el.sort((a,b) => b["id"] - a["id"])).flat()

  return (
    <div className="App">
      <ItemsList data={sortedData}/>
    </div>
  );
}

export default App;
