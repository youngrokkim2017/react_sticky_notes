import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

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
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  // save to local storage
  useEffect(() => {
    // first parameter is the key
    // second paramter is the data we want to save (good practice to stringify data before saving to local storage)
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes]); // dependency array, whenever whatever is in the [] changes, it updates

  // retrieve items from local storage
  useEffect(() => {
    // have to parse the data in JS object from the JSON we saved into local storage
    // will retrieve the data with the same key
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))

    // check if we recevied any notes from local storage, if we did then set into state
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, []) // when dependency array is empty, it will only run on the first load and not anymore after that

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
    // create a div container for dark mode
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="app-container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList 
          notes={notes.filter((currentNote) => currentNote.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote}
          />
      </div>
    </div>
  )
}

export default App;