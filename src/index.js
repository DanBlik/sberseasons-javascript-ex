import "./styles.css";
import data from "./data.js";

let lastArr = [];
let otherArr = [];
let penulArr = [];

data.map((el) => {
  if (el.feature === "last") {
    el.data = "featuredLast";
    lastArr.push(el);
  } else if (el.feature === "other") {
    el.data = "featuredOther";
    otherArr.push(el);
  } else {
    el.data = "featuredPenultimate";
    penulArr.push(el);
  }
});

let byId = () => {
  return (a, b) => (a["id"] > b["id"] ? -1 : 1);
};

let sortArr = (arr) => {
  return arr.sort(byId());
};
sortArr(lastArr);
sortArr(otherArr);
sortArr(penulArr);

const resArr = otherArr.concat(penulArr, lastArr);

const app = document.querySelector("#app");
const newContainer = document.createElement("div");
newContainer.classList.add("container");
newContainer.dataset.container = "";

resArr.forEach((el) => {
  let div = document.createElement("div");
  div.innerHTML = `${el.id} ${el.feature}`;
  div.id = el.id;
  div.dataset[el.data] = "";
  newContainer.insertAdjacentElement("beforeend", div);
});

app.insertAdjacentElement("beforeend", newContainer);