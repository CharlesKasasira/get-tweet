import { createContext, useContext, useState, useEffect } from 'react'

const toggleContext = createContext()
export const useToggle = () => useContext(toggleContext)

export default function ToggleProvider({children}){
    const [theme, setTheme] = useState('light-theme')
    const [ darkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem('profileDark')) || false)
    useEffect(() => {
        setTheme(localStorage.getItem('theme'))
    }, [darkMode])

    const value = {
        toggleDarkMode: () => {
            localStorage.setItem("profileDark", !darkMode)
            setDarkMode(() => !darkMode)
        },
        theme,setTheme,
        darkMode
    }

    return (
        <toggleContext.Provider value={value} >
            {children}
        </toggleContext.Provider>
    )
}