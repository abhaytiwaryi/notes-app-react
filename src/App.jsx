import React, { useState } from 'react'

const App = () => {
  
  const [title, settitle] = useState("")
  const [Details, setDetails] = useState("")

  const [task, settask] = useState([])
  const submitHandler =(e) => {
    e.preventDefault()
    
    const copyTask = [...task];

    copyTask.push({title,Details})

    

    settask(copyTask)

    settitle("")
    setDetails("")
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx,1)

    settask(copyTask)
    
  }


  return (
    <div className='min-h-screen lg:flex bg-black text-white p-10 font-nunito'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
          <h1 className='font-bold text-2xl text-blue-600'>Add Notes</h1>

        {/* first input for heading */}
          <input type="text" placeholder='Notes Title' className='px-5 py-2 font-medium border-2 rounded-2xl w-full outline-none border-gray-500' 
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
          />

          {/* Detailed input */}
          <input type="text" className='px-5 py-2 border-2 rounded-2xl h-20 w-full outline-none border-gray-500' placeholder='Write your notes here.'
          value={Details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          />
          <button
          className='bg-blue-600 text-black active:scale-95 cursor-pointer px-5 py-2 rounded-2xl w-full'>
          Add Notes
          </button>

      </form>
      <div className='lg:w-1/2 p-10'>
      <h1 className='font-bold text-2xl text-blue-600'>Recent Notes</h1>
       <div className='flex gap-7 mt-5 h-full overflow-auto flex-wrap lg:border-l-2 border-gray-500 p-10 scrollbar-none'>
        {task.map(function(elem,idx){

          return <div key={idx} className='h-52 w-40 flex flex-col justify-between rounded-2xl bg-gray-900 relative p-5 overflow-hidden'>
            <div>
              <h1 className='text-blue-600 text-xl leading-tight font-bold'>{elem.title}</h1>
              <p className='text-gray-300 leading-tight font-light mt-2'>{elem.Details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='bg-red-700 rounded font-medium active:bg-red-500 cursor-pointer active:scale-95'>Delete</button>
          </div>
        })}
       </div>
      </div>
    </div>
  )
}

export default App