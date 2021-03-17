import "./styles.css";
import data from "./data.js";

const container = document.querySelector(".container");

const createSortArr = (arr) => {
  const lastArr = [],
    otherArr = [],
    penultimateArr = [];

  const sortArr = (arr) => {
    return arr.sort((a, b) => (a["id"] > b["id"] ? -1 : 1));
  };

  arr.forEach((el) => {
    if (el.feature === "last") {
      el.data = "data-featured-last";
      lastArr.push(el);
    } else if (el.feature === "other") {
      el.data = "data-featured-other";
      otherArr.push(el);
    } else {
      el.data = "data-featured-penultimate";
      penultimateArr.push(el);
    }
  });
  sortArr(lastArr);
  sortArr(otherArr);
  sortArr(penultimateArr);

  const resArr = [...otherArr, ...penultimateArr, ...lastArr];

  return resArr;
};

const drawItems = (items) => {
  let reducedItems = items.reduce((html, item) => {
    html += `<div id="${item.id}" ${item.data}>${item.id} ${item.feature}</div>`;
    return html;
  }, '');

  container.insertAdjacentHTML('beforeend', reducedItems)
};

drawItems(createSortArr(data));

// не совсем помню задание нужно ли создавать
//всю обертку с дивами или
//нужно просто вывести отсортрованный список

/**
 * нужно в container заспредить отсортированные дивы
 *
 * сам контейнер не нужно создавать, в принципе,
 * ты уже сделал всё
 */

//понял, спасибо вам за уделенное время :)

/**
 * попробуй теперь причесать:
 * - выделить функции нужные
 * - через редьюс преобразование данных сделать
 */

// понял, хорошо

/**
 * в 17 вернёмся глянем окончательный вариант
 */

// Причесал, выделил нужные функции. Reduce, на сколько понял где уместен, применил