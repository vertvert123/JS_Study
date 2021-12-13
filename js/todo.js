const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const todoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let todos = [];

function savetodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deletedoto(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((toDo)=> toDo.id != parseInt(li.id));
    savetodos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deletedoto);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;

    todoList.appendChild(li);

}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newtodoobj = {
        text: newTodo,
        id: Date.now()
    };
    todos.push(newtodoobj);
    paintToDo(newtodoobj);
    savetodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedtodos = localStorage.getItem(TODOS_KEY);

if (savedtodos != null) {
    const parsetodos = JSON.parse(savedtodos);
    parsetodos.forEach(paintToDo);

    //parsetodos.foreach((item)=> console.log("this is the turn of")); 함수를 만들지 않고 만드는 방법 
    // 함수에 item 매개변수를 넣고 실행하면 배열에 항목마다 실행 안하면 배열의 수만큼 실행

}
//filter 는 배열을 직접건드는게 아닌 따로 값을 주는것이다.
