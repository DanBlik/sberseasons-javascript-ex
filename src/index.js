import "./styles.css"
import data from "./data.js"

const createDiv = (params) => {
  const nodeItem = document.createElement("div")
  nodeItem.textContent = `${params.id} ${params.feature}`
  return nodeItem
}
const container = document.querySelector(".container")

let dataCopySortedById = JSON.parse(JSON.stringify(data)).sort((a,b) => b["id"] - a["id"])

const result = dataCopySortedById.reduce((acc, currentDataElement) => {
  let element = createDiv(currentDataElement)
  switch (currentDataElement.feature) {
    case "last":
      element.setAttribute("data-featured-last", "")
      acc[2].push(element)
      break
    case "other":
      element.setAttribute("data-featured-other", "")
      acc[0].push(element)
      break
    case "penultimate":
      element.setAttribute("data-featured-penultimate", "")
      acc[1].push(element)
      break
  }
  
  return acc
}, [[],[],[]]).flat()

container.replaceChildren(...result)