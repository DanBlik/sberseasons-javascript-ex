import "./styles.css"
import data from "./data.js"

const container = document.querySelector(".container")

const createDiv = (dataItem, dataAttrValue, id) => {
  const div = document.createElement("div")
  div.insertAdjacentHTML("beforeend", `${dataItem.id} ${dataItem.feature}`)
  div.setAttribute(dataAttrValue, "")
  div.setAttribute("id", id)
  return div
}

const result = data.reduce((acc, currentDataElement) => {
  const [others, penultimates, lasts] = acc
  acc.map(itemsList => itemsList.sort((a,b) => b["id"] - a["id"]))

  switch (currentDataElement.feature) {
    case "last":
      lasts.push(createDiv(currentDataElement, "data-featured-last",currentDataElement.id))
      break
    case "other":
      others.push(createDiv(currentDataElement, "data-featured-other",currentDataElement.id))
      break
    case "penultimate":
      penultimates.push(createDiv(currentDataElement, "data-featured-penultimate",currentDataElement.id))
      break
  }
  
  return acc
}, [[],[],[]]).flat()

container.replaceChildren(...result)