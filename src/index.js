import { TodoModel } from "./model";
import "./style.css";
import { renderTodoApp } from "./view";

document.addEventListener("DOMContentLoaded", function () {
  const model = new TodoModel();
  renderTodoApp(model);
});
