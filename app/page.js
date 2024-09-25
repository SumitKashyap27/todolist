"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([]) // empty array to store tasks

  const submitHandler = (e) => {
    e.preventDefault() // Prevent page reload
    // Add task as an object with title and desc
    setmainTask([...mainTask, { title, desc }]) 
    // Clear form fields
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  let renderTask = <h2>No task available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i}>
          <div className='flex justify-between'>
            <h5>{t.title}</h5>
            <h6>{t.desc}</h6>
          </div>
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
          onChange={(e) => settitle(e.target.value)} />
        <input type="text" className='rounded-md text-2xl border-zinc-800 border-2 m-5 px-4 py-2 text-center'
          placeholder='Enter description'
          value={desc}
          onChange={(e) => setdesc(e.target.value)} />
        <button className='bg-black px-6 py-2 text-white rounded-md'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
