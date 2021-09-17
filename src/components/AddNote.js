import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterCount = 200;

    const handleChange = (e) => {
        if (characterCount - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText)
            setNoteText('')
        }
    }

    return (
        <div className="note-container new">
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a new note..."
                value={noteText}
                onChange={handleChange}
            >
            </textarea>
            <div className="note-footer">
                {/* holds the character count */}
                <small>{characterCount - noteText.length} Remaining</small>
                <button
                    className="save-button"
                    onClick={handleSaveClick}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default AddNote;