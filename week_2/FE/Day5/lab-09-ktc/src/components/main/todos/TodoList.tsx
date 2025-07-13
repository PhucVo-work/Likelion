import React, { useEffect, useState } from "react";
import type { Todo } from "../../types/todos.type";
import type { todoInput } from "../../types/todoInput.types";
import { createTodo, getAllTodos } from "../../../services/todoApi";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<todoInput>({ title: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllTodos();
        setTodos(data.slice(0, 10));
        setError(null);
      } catch (error) {
        setError("Failed to load todos");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ title: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    try {
      const newTodo = await createTodo(form.title);
      if(newTodo.id === 201){
          alert("Created successfully. Status: " + JSON.stringify(newTodo));
      }
      setForm({ title: "" });
    } catch (error) {
      alert("Failed to create todo");
    }
  };

  return (
    <div className="max-w-lg px-4 py-10 mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-center">Todo List</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          value={form.title}
          onChange={handleChange}
          placeholder="Enter todo..."
          className="flex-1 px-4 py-2 border rounded shadow"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="px-4 py-2 border rounded shadow">
              {todo.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
