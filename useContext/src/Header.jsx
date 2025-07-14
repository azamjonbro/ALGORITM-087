import React, { useContext } from 'react'
import ThemeContext from "./themeContext.jsx";
function Header() {
 const {theme, toggleTheme }= useContext(ThemeContext);
 
  return (
    <div>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Header
