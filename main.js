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
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
      items.forEach(function (item) {
        list.removeChild(item);
      });
    }
    container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}




function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");

  setBackToDefault();

  removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
}
grocery.value = editElement.innerHTML;