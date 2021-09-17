import React from 'react';
import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, text, date, handleDeleteNote }) => {
    return (
        <div className="note-container">
            <div>{text}</div>
            <div>
                <small>{date}</small>
                <MdDeleteForever className="delete-button" onClick={() => handleDeleteNote(id)} />
            </div>
        </div>
    )
}

export default Note;