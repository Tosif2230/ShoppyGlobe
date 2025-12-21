import React from 'react'
import { useRouteError } from 'react-router-dom'

function NotFound() {
  let err = useRouteError()
  console.log(err.data)
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-4xl mt-5'>Somthing Went Wrong</h1>
      <h1 className='text-9xl  mt-5'>{err.status}</h1>
      <h2 className='text-4xl mt-5'>{err.error.message}</h2>
      <h3 className='text-4xl mt-5'>{err.statusText}</h3>
      <button type="button" class="rounded-xl m-5 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Back to Home</button>

    </div>
  )
}

export default NotFound
