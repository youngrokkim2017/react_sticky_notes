import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';

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

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    }

    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);
  }

  return (
    <div className="app-container">
      <Search />
      <NotesList 
        notes={notes} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
        />
    </div>
  )
}

export default App;