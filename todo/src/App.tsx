import { useEffect, useState } from "react";
import "./App.css";
import { Parent } from "./components/Parent";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const API_URL = "http://localhost:3000/todos";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fetch Todos on Mount
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch todos");
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async (title: string) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false }),
      });

      const newTodo = await response.json();
      setTodos((prev) => [...prev, newTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    if (title) addTodo(title);
    e.currentTarget.reset();
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <p>This is a simple todo list application built with React.</p>

      <section>
        <h2>Add Todo</h2>
        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            name="title"
            placeholder="Enter todo title"
            required
          />
          <button type="submit">Add Todo</button>
        </form>
      </section>

      <section>
        <ul className="todo-list">
          {todos.map(({ id, title, completed }) => (
            <li key={id} className="todo-item">
              <p>
                <span className="todo-title">{title}</span>
                <span className="todo-status">{completed ? "✔️" : "❌"}</span>
              </p>
              <button className="todo-delete" onClick={() => deleteTodo(id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && <p>No todos available.</p>}
      </section>

      <Parent />
    </div>
  );
}
