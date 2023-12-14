"use client";
import React, { useState } from "react";
import { InputField } from "./components/InputField";
import { Todo } from "./models/models";
import TodoList from "./components/TodoList";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";



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
    <main className="h-screen min-w-[325px] flex flex-col justify-between overflow-auto bg-[#2f74c0] text-white">
      <div className="container mx-auto">
        <motion.h1 
        className="text-center text-4xl py-5 font-silkscreen"
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{
          ease:'easeInOut',
          delay:0.1,
       
        }}
        >
          TODOS APP
          </motion.h1>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
      <div className="container mx-auto flex flex-col py-5 justify-center items-center">
      <p className="opacity-50">Developed by Matias Tellini</p>
      <div className="flex mt-3 gap-2 text-xl">
         <Link href={'https://www.linkedin.com/in/matias-tellini-12a705232/'} target="_blank"><FaLinkedin/></Link>
        <Link href={'https://github.com/teyuu'} target="_blank"><FaGithub/></Link>
      </div>
       
      </div>
      
    </main>
  );
};

export default Home;
