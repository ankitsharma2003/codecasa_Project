import React, { useState } from 'react'
import './note.css'

function Notes() {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('')
      

     function handleSubmit() {
         const newNotesArrays = [...notes, input];
         setNotes(newNotesArrays);
     }

     function inputText(e) {
          setInput(e.target.value);
     }
  return (
    <div className='Notes'>
        <div className="mainNote">
        <input type="text" className='inputNote'  onChange={inputText} />
        <button className='btnNote' onClick={handleSubmit}>Submit</button>
        </div>
        <ul className='listNote'>
            {notes.map((note) => {
                return <li className='listItem'>{note}</li>
            })}
        </ul>
    </div>
  )
}

export default Notes