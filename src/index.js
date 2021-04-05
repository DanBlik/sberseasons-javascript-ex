import "./styles.css"
import data from "./data.js"

const createDiv = (dataItem) => {
  const div = document.createElement("div")
  div.insertAdjacentHTML("beforeend", `${dataItem.id} ${dataItem.feature}`)
  div.setAttribute(`data-featured-${dataItem.feature}`, "")
  div.setAttribute("id", dataItem.id)
  return div
}

const sortedData = data.reduce((acc, currentDataElement) => {
  const [others, penultimates, lasts] = acc

  switch (currentDataElement.feature) {
    case "last":
      lasts.push(createDiv(currentDataElement))
      break
    case "penultimate":
      penultimates.push(createDiv(currentDataElement))
      break
    default:
      others.push(createDiv(currentDataElement))
  }
  
  return acc
}, [[],[],[]])
    .map(el => el.sort((a,b) => b["id"] - a["id"]))
    .flat()

document.querySelector(".container").replaceChildren(...sortedData)