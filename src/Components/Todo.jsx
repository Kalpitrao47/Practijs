import React, { useState } from 'react'

const Todo = () => {
    const [value,setValue] = useState("")
    console.log("🚀 ~ Todo ~ value:", value)


   const handleInputChange = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
   }

   const handleAdd = () =>{
        
   }

  return (
    <div>
            <h1>TodoList</h1>
            <input type="text" value={value} id="todo" name="todo1" className='text-black border border-black'onChange={(e) => handleInputChange(e)}/>
            <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Todo

// Step1: Create input Text
// Step2: Create Button Add
// Step3: 