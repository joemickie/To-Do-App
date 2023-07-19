const addNewItem = document.querySelector("#addNewItem");
const display_todo = document.querySelector(".display_todo");

function addtodo() {
  if (addNewItem.value !== "") {
    let item = addNewItem;
    createNewTodo(item);
    addNewItem.value = "";
  }
}

function addCheckedClass(e) {
  const parentTodo = e.currentTarget.parentElement.parentElement;
  parentTodo.classList.toggle("checked");
}

function editclass(e) {
  const editPanel = e.currentTarget.parentElement.previousElementSibling;
  if (editPanel.disabled == false) {
    editPanel.disabled = true;
  } else {
    editPanel.disabled = false;
  }
}

function deleteClass(e) {
  const setForDelete = e.currentTarget.parentElement.parentElement;
  const parentEle = e.currentTarget.parentElement.parentElement.parentElement;

  parentEle.removeChild(setForDelete);
}

function createNewTodo(item) {
  let addfreshNode = `<div class="display_single_todo">
    <input type="text" value="${item.value}" id="displayEachTodo" disabled>
    <form>
     <input type="checkbox" name="" class="checkTodo">
     <button class="edit" type="button" id="editTodo"><i class="fas fa-edit">edit</i></button>
     <button class="delete" type="button" id="deleteTodo"><i class="far fa-trash-alt">delete</i></button>
    </form>
   </div>`;

  display_todo.innerHTML += addfreshNode;

  // eventlistener for checking finished task 
  let displayingTodos = document.querySelectorAll(".checkTodo");

  // add eventlistener to each of them
  displayingTodos.forEach(function (displayingTodo) {
    displayingTodo.addEventListener("change", addCheckedClass);
    console.log("working!");
  });

  // function for editing tasks
  let edits = document.querySelectorAll(".edit");

  // add eventlistener to each of them
  edits.forEach(function (edit) {
    edit.addEventListener("click", editclass);
    console.log("editing!");
  });

  // function for deleting tasks
  let deletes = document.querySelectorAll(".delete");

  // add eventlistener to each of them
  deletes.forEach(function (deleteItem) {
    deleteItem.addEventListener("click", deleteClass);
    console.log("deleted!");
  });
}
