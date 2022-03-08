import {Link} from 'react-router-dom'
import Switch from './toggle'

function Navbar() {
    return (
            <nav className="navbar">
                <div></div>
                <div className='navbar-home'>
                    <div className="nav-link">
                        <Link to="/" className="nav-item" id="first-item">Home</Link>
                        <a href="https://kasasira.medium.com" className="nav-item">Blog</a>
                    </div>
                    <div className="nav-cta">
                        <Switch />
                    </div>
                </div>
                <div></div>
            </nav>
    )
}

export default Navbar
