import React from 'react';
import { MdSearch } from 'react-icons/md'

const Search = () => {
    return (
        <div className="search-container">
            <MdSearch className="search-button" />
            <input 
                type="text" 
                placeholder="type to search notes..." 
            />
        </div>
    )
}

export default Search;