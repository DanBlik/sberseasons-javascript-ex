import "./styles.css"
import data from "./data.js"

let dataCopySortedById = data.slice().sort((a,b) => b["id"] - a["id"])

const result = dataCopySortedById.reduce((sortedArrData, dataElement) => {
  if (dataElement.feature === "last") {
    dataElement.data = "featuredLast"
    sortedArrData[2].push(dataElement)
  }
  else if (dataElement.feature === "other") {
    dataElement.data = "featuredOther"
    sortedArrData[0].push(dataElement)
  }
  else {
    dataElement.data = "featuredPenultimate"
    sortedArrData[1].push(dataElement)
  }
  return sortedArrData
}, [[],[],[]]).flat()

const container = document.querySelector(".container")

const appendItems = (items) => {
  let nodes = items.map(item => {
    const nodeItem = document.createElement("div")
    nodeItem.dataset[item.data] = item.data
    nodeItem.textContent = `${item.id} ${item.feature}`
    return nodeItem
  })
  container.replaceChildren(...nodes)
}

appendItems(result)