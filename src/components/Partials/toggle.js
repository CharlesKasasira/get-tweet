import { useEffect, useState } from 'react'
import '../../styles/toggle.css'
import { useToggle } from 'components/context/toggle'

function Switch() {
  const [togClass, setTogClass] = useState('light')
  const { theme, setTheme} = useToggle()

  const changeTheme = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
      localStorage.setItem('theme', 'dark-theme')
      setTogClass('light')
    } else {
      setTheme('light-theme')
      localStorage.setItem('theme', 'light-theme')
      setTogClass('dark')
    }
  }

  useEffect(() => {
    if(localStorage.getItem('theme') === 'dark-theme'){
      setTogClass('dark')
    } else if(localStorage.getItem('theme') === 'light-theme'){
      setTogClass('light')
    }
  })

  return (
    <div>
      
      <label className="switch">
        {
          togClass === 'dark' ? <input type="checkbox" onClick={changeTheme} checked/>
          : <input type="checkbox" onClick={changeTheme} />
        }
        
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default Switch