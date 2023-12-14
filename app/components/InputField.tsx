

interface props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void
}

export const InputField:React.FC<props>= ({todo,setTodo, handleAdd}) => {
  return (
    <div className="container py-5 ">
        <form onSubmit={(e)=>handleAdd(e)} className="flex items-center relative">
            <input value={todo} onChange={(e) => setTodo(e.target.value) } className="w-full py-5 px-2 rounded-xl text-black border-2 border-gray-300 transition duration-300 ease-in-out focus:border-blue-500 focus:outline-none" type="text" placeholder="Enter a task"/>
            <button className="bg-[#2f74c0] rounded-3xl absolute right-0 mr-2 px-3 py-2 transition duration-300 ease-in-out transform hover:scale-105" type="submit" >GO</button>
        </form>
    </div>
  )
}
