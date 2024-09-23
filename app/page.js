"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  return (
    <>
    <h1 className='bg-black text-white p-5 text-xl text-center font-bold'   >
      Todo List
    </h1>
    <form className='text-center'>
      <input type="text" className='rounded-md text-2xl border-zinc-800 border-2 m-5 px-4 py-2 text-center'
      placeholder='Enter your Task' />
      <input type="text" className='rounded-md text-2xl border-zinc-800 border-2 m-5 px-4 py-2 text-center'
      placeholder='Enter description' />
      <button className='bg-black px-6 py-2 text-white rounded-md '>Add Text </button>
    </form>
    </>
  )
}

export default page