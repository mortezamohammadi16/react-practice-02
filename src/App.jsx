import { useState } from 'react'
import Header from './assets/Header'

function App() {
 

  return (
    <>
      <Header />

      <div className='flex justify-center mt-2.5 gap-2.5'>
        <button type="button" className='w-[150px] h-10 bg-amber-200 rounded-[10px]'>Light</button>
        <button type="button" className='w-[150px] h-10 bg-gray-900  text-[#fefefe] rounded-[10px]'>Dark</button>
      </div>
    


    </>
  )
}

export default App
