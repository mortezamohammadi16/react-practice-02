import { useEffect, useState } from 'react'
import Header from './assets/Header'

function App() {

 const [color, setColor] = useState("Light")

 const colorChanger = (newColor)=>{
    setColor(newColor);
 }

 useEffect(()=>{
  if (color == "Dark") {
    document.body.classList.add("bg-gray-900")
    document.body.classList.remove("bg-amber-200", "text-black")
    
  }else{
    document.body.classList.add("bg-amber-200", "text-black")
    document.body.classList.remove("bg-gray-900")
  }
 }, [color])

  return (
    <>
      <Header />

      <div className='flex justify-center mt-2.5 gap-2.5'>
        <button type="button" className='w-[150px] h-10 bg-amber-200 rounded-[10px]' onClick={()=>colorChanger("Light")}>Light</button>
        <button type="button" className='w-[150px] h-10 bg-gray-900  text-[#fefefe] rounded-[10px]' onClick={()=>colorChanger("Dark")}>Dark</button>
      </div>
    


    </>
  )
}

export default App
