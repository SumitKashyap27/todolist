"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])//empty array to store 
  const submitHandler = (e) => {
    e.preventDefault()// inbuilt method which stops the page re loading
    setmainTask([...mainTask, (title, desc)])//spread operator jisse puranatask ns hate
    //this is for empting form but with console.log() you can see your task in consol
    settitle("")
    setdesc("")
    console.log(mainTask)
  }


  let renderTask = <h2> No task available</h2>
  return (
    <>
      <h1 className='bg-black text-white p-5 text-xl text-center font-bold'   >
        Todo List
      </h1>
      <form className='text-center'
        onSubmit={submitHandler}>
        <input type="text" className='rounded-md text-2xl border-zinc-800 border-2 m-5 px-4 py-2 text-center'
          placeholder='Enter your title'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input type="text" className='rounded-md text-2xl border-zinc-800 border-2 m-5 px-4 py-2 text-center'
          placeholder='Enter description'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button className='bg-black px-6 py-2 text-white rounded-md '>Add Text </button>
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