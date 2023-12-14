import React from "react";
import SingleTodo from "./SingleTodo";
import { Todo } from "../models/models";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="container px-2 pb-2 flex flex-col lg:flex-row gap-3 text-black">
      {/* Todo List */}
      <div className="flex flex-col gap-4 w-full  px-6 py-3 h-fit bg-cyan-500">
        <h2 className="text-2xl text-center text-white uppercase">Todo List</h2>
        
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
      </div>
      {/* Completed Todo List */}
      <div className="flex flex-col gap-4 w-full px-6 py-3 h-fit bg-[#E97A7A]">
        <h2 className="text-2xl text-center text-white uppercase">Completed Todos </h2>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => (
            <s>
              <SingleTodo
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            </s>
          ))}
      
      </div>
    </div>
  );
};

export default TodoList;
