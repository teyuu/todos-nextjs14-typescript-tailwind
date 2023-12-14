import React from 'react'
import SingleTodo from './SingleTodo'
import { Todo } from '../models/models'
import { AnimatePresence, animate, motion } from 'framer-motion'

interface props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <AnimatePresence>
      <div className="container px-2 pb-2 flex flex-col lg:flex-row gap-3 text-black">
        {/* Todo List */}
        <motion.div
          layout
          className="flex  flex-col gap-4 w-full  px-6 py-3 h-fit bg-cyan-500"
        >
          <h2 className="text-2xl text-center text-white uppercase">
            Todo List
          </h2>
          <ul className='flex flex-col gap-5'>
            {todos
              .filter((todo) => !todo.isDone)
              .map((todo) => (
                <motion.li
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layoutId={Date.now().toString()}
                >
                  <SingleTodo
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                  />
                </motion.li>
              ))}
          </ul>
        </motion.div>
        {/* Completed Todo List */}
        <motion.div
          layout
          className="flex flex-col gap-4 w-full px-6 py-3 h-fit bg-[#E97A7A]"
        >
          <h2 className="text-2xl text-center text-white uppercase">
            Completed Todos{' '}
          </h2>
          <ul className='flex flex-col gap-5'>
            {todos
              .filter((todo) => todo.isDone)
              .map((todo) => (
                <motion.s
                  variants={variants}
                  initial="hiddin"
                  animate="visible"
                  exit="visible"
                  layoutId={Date.now().toString()}
                >
                  <SingleTodo
                    key={todo.id}
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                  />
                </motion.s>
              ))}
          </ul>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default TodoList
