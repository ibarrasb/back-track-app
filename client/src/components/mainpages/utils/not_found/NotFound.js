import React from 'react'
import Frown from '../../../../images/frown-regular.svg'
import './notfound.css'

function NotFound() {
    return (
        <div>
        <img src={Frown} alt="Frown" className="frown"/>
        <div  className="not-found">
        
            404 | Not Found
        </div>
        </div>
    )
}

export default NotFound
