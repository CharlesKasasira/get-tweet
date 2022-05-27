import {Link} from 'react-router-dom'
import Switch from './toggle'
import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useToggle } from 'components/context/toggle';

function Navbar() {
    const { darkMode, toggleDarkMode } = useToggle()
    return (
            <nav className="navbar">
                <div></div>
                <div className='navbar-home'>
                    <div className="nav-link">
                        <Link to="/" className="nav-item" id="first-item">Home</Link>
                        <a href="https://kasasira.medium.com" className="nav-item">Blog</a>
                    </div>
                    <div className="nav-cta">
                        {/* <Switch /> */}
                        {/* <div className='mx-3'> */}
                        <DarkModeSwitch
                            style={{ marginBottom: '0' }}
                            checked={darkMode}
                            onChange={() => toggleDarkMode()}
                            size={30}
                        />
                        {/* </div> */}
                    </div>
                </div>
                <div></div>
            </nav>
    )
}

export default Navbar
