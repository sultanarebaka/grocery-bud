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

// add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
}


localStorage.setItem("list", JSON.stringify(items));

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}


function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">{value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;


 // add event listeners to buttons;
 const deleteBtn = element.querySelector(".delete-btn");
 deleteBtn.addEventListener("click", deleteItem);
 const editBtn = element.querySelector(".edit-btn");
 editBtn.addEventListener("click", editItem);

 // append child
 list.appendChild(element);
}
