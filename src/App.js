import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my first note",
      date: "15/09/2021"
    },
    {
      id: nanoid(),
      text: "this is my second note",
      date: "16/09/2021"
    },
    {
      id: nanoid(),
      text: "this is my third note",
      date: "16/09/2021"
    },
  ])

  return (
    <div className="app-container">
      <NotesList notes={notes} />
    </div>
  )
}

export default App;