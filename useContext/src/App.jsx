import React,{useState} from 'react'
import ThemeContext from "./themeContext.jsx";
import Header from './Header.jsx';
import About from './About.jsx';
function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }
  return (

    <div className=''>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <About/>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
