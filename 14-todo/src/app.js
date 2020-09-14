// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const conatiner = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


// edit option
let editElement;
let editFlag = false;
let editId = "";
// ****** EVENT LISTENERS **********
form.addEventListener("submit", addListFunction);

clearBtn.addEventListener("click", removeItemsList);

window.addEventListener("DOMContentLoaded", setUpItems);

// ****** FUNCTIONS **********


function addListFunction(e){
    e.preventDefault();
    const value = grocery.value.trim();
    const id = new Date().getTime().toString();
    
    if(value && editFlag === false){  
        displayItems(id, value);        
        displayAlert("item added to the list", "success");

        // add items to local storage
        addToLocalStorage(id, value);

        // set back to default
        setBackToDefault();    
    } else if(value && editFlag === true) {
        editElement.textContent = grocery.value;

        displayAlert("item edited to the list", "success");

        // add items to local storage
        editItemsInTheLocalStorage(editId, editElement.textContent);

        // set back to default
        setBackToDefault();  

    } else {
        displayAlert("please, enter item", "danger");
    }



}

// display alert
function displayAlert(text, className){
    alert.innerHTML = text;
    alert.classList.add(`alert-${className}`);


    setTimeout(function(){
        alert.innerHTML = "";
        alert.classList.remove(`alert-${className}`);
    }, 1000)
}


function setBackToDefault() {
    grocery.value = "";
    editId  = "";
    editFlag = false;
    editElement = "";
    submitBtn.textContent = "submit";
}

// display items
function displayItems(id, value){
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    const attribute = document.createAttribute("data-id");
    attribute.value= id;
    element.setAttributeNode(attribute);
    list.appendChild(element);
    const html = `
            <p class="title">${value}</p>
            <div class="btn-container">
                <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>`;

    element.innerHTML = html;
    conatiner.classList.add("show-container");
    
    const editButton = element.querySelector(".edit-btn");
    const deleteButton = element.querySelector(".delete-btn");
    editButton.addEventListener("click", editListItem);
    deleteButton.addEventListener("click", deleteListItem);
}

// edit items
function editListItem(){
    const parentElementId = this.parentElement.parentElement.dataset.id;
    editId = parentElementId;
    editElement = this.parentElement.previousElementSibling;
    grocery.value = editElement.textContent;
    submitBtn.textContent = "edit";
    editFlag = true;
}

// delete items
function deleteListItem(){
    const parentElementId = this.parentElement.parentElement.dataset.id;
    editId = parentElementId;
    const parentElem = this.parentElement.parentElement;
    list.removeChild(parentElem);
    if(list.children.length === 0){
        conatiner.classList.remove("show-container")
    }

    displayAlert("item removed from the list", "danger");

    // local storage delete item

    deleteFromLocalStorage(editId);

    setBackToDefault();

}

// remove items from the list
function removeItemsList(){

    if(list.children.length > 0){
        const childs = list.querySelectorAll(".grocery-item");
        childs.forEach(function(item){
            list.removeChild(item);
        })
    }
    conatiner.classList.remove("show-container");
    
    displayAlert("items removed from the list", "danger");
    // localStorage.clear();

    setBackToDefault();
    
}


// ****** LOCAL STORAGE **********

// add items to the local storage

function addToLocalStorage(id, value){
    const getItems = checkLocalStorage();
    const list = {id : id, value : value};
    getItems.push(list);
    localStorage.setItem("list", JSON.stringify(getItems));
}


// edit items in the local storage
function editItemsInTheLocalStorage(id, value){
    const getItems = checkLocalStorage();
    const list = getItems.map(function(item){
        if(item.id === id){
            item.value = value;
            return item;
        }
        return item;
    })

    localStorage.setItem("list", JSON.stringify(list));
}

// delete from local storage
function deleteFromLocalStorage(id){
    const getItems = checkLocalStorage();

    const list = getItems.filter(function(item){
        if(item.id !== id){            
            return item;
        }
    })
    localStorage.setItem("list", JSON.stringify(list));
    
    if(checkLocalStorage().length === 0){
        localStorage.clear();
    }


}

// check local storage
function checkLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

// ****** SETUP ITEMS **********

function setUpItems(){
    const getItems = checkLocalStorage();
    if(getItems.length > 0){
        getItems.forEach(function(item){
            displayItems(item.id, item.value)
        });

    }
}