import React from 'react';
import { MdSearch } from 'react-icons/md'

const Search = ({ handleSearchNote }) => {
    return (
        <div className="search-container">
            <MdSearch className="search-button" />
            <input 
                type="text" 
                placeholder="type to search notes..." 
                onChange={(e) => handleSearchNote(e.target.value)}
            />
        </div>
    )
}

export default Search;