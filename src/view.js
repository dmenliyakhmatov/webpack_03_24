import image from "./image.png";
import todoImg from "./todo.png";

export function renderTodoApp(model) {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = "";

  const todoInput = document.createElement("input");
  todoInput.type = "text";
  todoInput.id = "todoInput";
  todoInput.placeholder = "Add new todo";
  appContainer.appendChild(todoInput);

  const addTodoBtn = document.createElement("button");
  addTodoBtn.textContent = "Add";
  addTodoBtn.id = "addTodoBtn";
  appContainer.appendChild(addTodoBtn);

  const todoList = document.createElement("ul");
  todoList.id = "todoList";
  appContainer.appendChild(todoList);

  addTodoBtn.addEventListener("click", function () {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
      const todo = model.addTodo(todoText);
      renderTodoItem(todo);
      todoInput.value = "";
      throw Error("Error");
    }
  });

  todoList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      const todoId = parseInt(event.target.dataset.id);
      model.toggleTodoCompleted(todoId);
      event.target.classList.toggle("completed");
    }
  });

  function renderTodoItem(todo) {
    const todoItem = document.createElement("li");
    todoItem.dataset.id = todo.id;
    todoItem.textContent = todo.text;

    const img = document.createElement("img");
    img.src = todoImg;
    img.alt = "Todo img";
    img.classList.add("todo-icon");
    todoItem.appendChild(img);

    todoList.appendChild(todoItem);
  }

  const img = document.createElement("img");
  img.src = image;
  appContainer.append(img);
}

const arr = [1, 3, 2];

const splicedArr = [...arr].splice(0, 2, 190);

console.log(arr);
console.log(splicedArr);
///comment
