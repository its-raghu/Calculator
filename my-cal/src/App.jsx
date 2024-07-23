import React from 'react'

function App(){
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-slate-500 w-[350px] h-auto rounded-xl'>
        <input className='bg-black text-white w-full h-24 text-6xl font-[500] text-right p-3 rounded-t-xl' type="text" name="calculator" id="" placeholder='0' />
        <div id="dabba">
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md col-span-2">Clear</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">C</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">÷</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">7</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">8</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">9</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">×</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">4</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">5</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">6</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">-</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">1</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">2</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">3</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">+</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">0</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md">.</button>
          <button className="bg-black text-white m-2 text-3xl font-[500] rounded-md col-span-2">=</button>
      </div>
      </div> 
      
    </div>
  )
}

export default App
