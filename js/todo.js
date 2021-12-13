const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");

function deletedoto(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deletedoto);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo;
    todoList.appendChild(li);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);