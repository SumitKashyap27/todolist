import React from 'react'

const page = () => {
  return (
    <>
    <h1 className='bg-black text-white p-5 text-xl text-center font-bold'   >
      Todo List
    </h1>
    <form className='text-center'>
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 text-center'
      placeholder='Enter your first Task' />
    </form>
    </>
  )
}

export default page