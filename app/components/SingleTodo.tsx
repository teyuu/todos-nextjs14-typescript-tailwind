'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Todo } from '../models/models'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface props {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (edit) {
      inputRef.current?.focus()
    }
  }, [edit])

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()

   setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    )
    setEdit(false)
  }

  const handleEditClick=(e: React.FormEvent, id: number)=>{
    setEdit(!edit)
    if(editTodo){
      handleEdit(e, todo.id)
    }
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="flex justify-between p-5 bg-yellow-300 hover:border border-black transform hover:shadow-xl hover:scale-105 ease-in-out transition-all duration-200">
      <form onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
          <input
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
            ref={inputRef}
          />
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )}
      </form>

      <div className="flex text-2xl gap-4">
        {!edit ? (
          <>
            <span
              onClick={() => handleDone(todo.id)}
              className=" cursor-pointer"
            >
              <MdDone />
            </span>
            <span onClick={() => setEdit(!edit)} className=" cursor-pointer">
              <AiFillEdit />
            </span>
            <span
              onClick={() => handleDelete(todo.id)}
              className=" cursor-pointer"
            >
              <AiFillDelete />
            </span>
          </>
        ) : (
          <span onClick={(e) => handleEditClick(e, todo.id) }  className=" cursor-pointer">
            <AiFillEdit />
          </span>
        )}
      </div>
    </div>
  )
}

export default SingleTodo
