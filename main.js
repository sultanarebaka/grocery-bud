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
    
    const id = newDate().getTime().toString();

}

const element = document.createElement("article");

let attr = document.createAttribute("data-id");
attr.value = id;


const deleteBtn = element.querySelector(".delete-btn");
deleteBtn.addEventListener("click", deleteItem);
const editBtn = element.querySelector(".edit-btn");
editBtn.addEventListener("click", editItem);


// edit  local storage
editLocalStorage(editID, value);
setBackToDefault();
else {
displayAlert("please enter value", "danger");
}