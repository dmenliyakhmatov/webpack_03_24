// Модель данных
export class TodoModel {
  constructor() {
    this.todos = [];
  }

  addTodo(todoText) {
    const todo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    this.todos.push(todo);
    return todo;
  }

  deleteTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  toggleTodoCompleted(todoId) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === todoId) {
        const arr = [1, 2, 3, 4];

        const newArr = [...arr];

        return {
          ...todo,

          newArr,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  }
}
