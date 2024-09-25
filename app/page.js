"use client"
import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";

const Page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([]) // empty array to store tasks

  const submitHandler = (e) => {
    e.preventDefault() // Prevent page reload
    // Add task as an object with title and desc
    setMainTask([...mainTask, { title, desc }])
    // Clear form fields
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No task available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex mb-'>
          <div className='flex justify-evenly m-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          <button className='text-4xl p-4 h-12 w-12 text-red-400' 
            onClick={() => deleteHandler(i)}> 
            <MdDeleteForever /> 
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-xl text-center font-bold'>
        Todo List
      </h1>
      <form className='text-center' onSubmit={submitHandler}>
        <input type="text" className='rounded-md text-2xl border-zinc-800 border-2 m-5 px-4 py-2 text-center'
          placeholder='Enter your title'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <input type="text" className='rounded-md text-2xl border-zinc-800 border-2 m-5 px-4 py-2 text-center'
          placeholder='Enter description'
          value={desc}
          onChange={(e) => setDesc(e.target.value)} />
        <button className='bg-black px-6 py-2 text-white rounded-md'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-100'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default Page
