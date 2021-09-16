import React from 'react';
import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, text, date }) => {
    return (
        <div className="note-container">
            <div>{text}</div>
            <div>
                <small>{date}</small>
                <MdDeleteForever />
            </div>
        </div>
    )
}

export default Note;