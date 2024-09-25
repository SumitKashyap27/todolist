"use client"
import React, { useState } from 'react'
import { MdDeleteForever, MdEdit } from "react-icons/md";

const Page = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([]) // empty array to store tasks
  const [editingIndex, setEditingIndex] = useState(null) // to track which task is being edited

  const submitHandler = (e) => {
    e.preventDefault() // Prevent page reload

    if (editingIndex !== null) {
      // Update the task at the specified index
      const updatedTasks = [...mainTask]
      updatedTasks[editingIndex] = { title, desc }
      setMainTask(updatedTasks)
      setEditingIndex(null) // reset after editing
    } else {
      // Add a new task
      setMainTask([...mainTask, { title, desc }])
    }

    // Clear the form fields
    setTitle("")
    setDesc("")
  }

  const deleteHandler = (i) => {
    const copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  const editHandler = (i) => {
    setTitle(mainTask[i].title) // Populate the title field
    setDesc(mainTask[i].desc) // Populate the desc field
    setEditingIndex(i) // Set the task to be edited
  }

  let renderTask = <h2>No task available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex mb-8'>
          <div className='flex justify-evenly m-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
          <button className='text-4xl p-4 h-12 w-12 text-red-400' 
            onClick={() => deleteHandler(i)}> 
            <MdDeleteForever /> 
          </button>
          <button className='text-4xl p-4 h-12 w-12 text-blue-400' 
            onClick={() => editHandler(i)}> 
            <MdEdit /> 
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
        <button className='bg-black px-6 py-2 text-white rounded-md'>
          {editingIndex !== null ? "Update Task" : "Add Task"}
        </button>
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
