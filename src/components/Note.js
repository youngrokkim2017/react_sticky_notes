import React from 'react';
import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
    return (
        <div className="note-container">
            <div>This is the first note!</div>
            <div>
                <small>date xx/xx/xxxx</small>
                <MdDeleteForever />
            </div>
        </div>
    )
}

export default Note;