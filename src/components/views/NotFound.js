import React from 'react'
import { useToggle } from '../context/toggle'
import { Link } from 'react-router-dom'

function NotFound() {
    const { theme } = useToggle()

    return (
    <div className={`${theme} not-found`}>
        <h1 style={{"font-size":"2rem"}}>404</h1>
            <p style={{"font-size":"1.3rem"}}>page not found</p>
            <p>
                Let's get you  <Link to="/">Home</Link>
            </p>
        </div>
    )
}

export default NotFound
