import React, { useState } from 'react'

function App(){

  const [result, setResult] = useState("");

  function handleClick(event){
    const name = event.target.name
    setResult(result.concat(name))
  }
  function clear(){
    setResult("")
  }
  function backspace(){
    setResult(result.slice(0, -1))
  }
  function calculate(){
    try{
      setResult(eval(result))
    }catch(error){
      setResult("Error")
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-slate-500 w-[350px] h-auto rounded-xl'>
        <input className='bg-black text-white w-full h-24 text-6xl font-[500] text-right p-3 rounded-t-xl focus:outline-none caret-transparent'
         value={result} type="text" />
        <div id="dabba">
          <button onClick={clear} id='clear' className="bg-black text-white m-2 text-4xl font-[500] rounded-md col-span-2">Clear</button>
          <button onClick={backspace} id='backspace' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">C</button>
          <button onClick={handleClick} name='/' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">&divide;</button>
          <button onClick={handleClick} name='7' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">7</button>
          <button onClick={handleClick} name='8' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">8</button>
          <button onClick={handleClick} name='9' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">9</button>
          <button onClick={handleClick} name='*' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">&times;</button>
          <button onClick={handleClick} name='4' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">4</button>
          <button onClick={handleClick} name='5' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">5</button>
          <button onClick={handleClick} name='6' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">6</button>
          <button onClick={handleClick} name='-' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">&minus;</button>
          <button onClick={handleClick} name='1' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">1</button>
          <button onClick={handleClick} name='2' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">2</button>
          <button onClick={handleClick} name='3' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">3</button>
          <button onClick={handleClick} name='+' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">+</button>
          <button onClick={handleClick} name='0' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">0</button>
          <button onClick={handleClick} name='.' className="bg-black text-white m-2 text-4xl font-[500] rounded-md">.</button>
          <button onClick={calculate} className="bg-black text-white m-2 text-4xl font-[500] rounded-md col-span-2">=</button>
      </div>
      </div> 
      
    </div>
  )
}

export default App
