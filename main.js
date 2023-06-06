const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");

const clearBtn = document.querySelector(".clear-btn");

let editElement;

form.addEventListener("submit", addItem);

clearBtn.addEventListener("click", clearItems);
function addItem(event) {
    event.preventDefault();
    const value = grocery.value;
  

}