"use client";
import React, { useState } from "react";
import { InputField } from "./components/InputField";
import { Todo } from "./models/models";
import TodoList from "./components/TodoList";


const Home: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      const newTodo = { id: Date.now(), todo, isDone: false };
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };



  return (
    <main className="h-screen overflow-auto bg-[#2f74c0] text-white">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl py-5 font-silkscreen">TODOS APP</h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </main>
  );
};

export default Home;
