import { createContext, useContext, useState, useEffect } from 'react'

const toggleContext = createContext()
export const useToggle = () => useContext(toggleContext)

export default function ToggleProvider({children}){
    const [theme, setTheme] = useState('light-theme')
    useEffect(() => {
        setTheme(localStorage.getItem('theme'))
    }, [])

    return (
        <toggleContext.Provider value={{theme, setTheme}} >
            {children}
        </toggleContext.Provider>
    )
}