import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header-container">
            <h1>Notes</h1>
            <button
                className="toggle-button"
                onClick={() => 
                    handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
                }
            >
                Toggle Mode
            </button>
        </div>
    )
}

export default Header;