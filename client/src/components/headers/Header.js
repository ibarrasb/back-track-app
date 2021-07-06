import React, {useContext} from 'react';
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios';
import './header.css'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged


    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href = "/"
    }

    const loggedRouter = () => {
        return(
            <div>
            <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </div>
        )
    }

    return (
    <header>

        <div className='logo'>
            <h1>
                    <Link to="/">{isLogged ? "Backtrack" : ''}</Link>
            </h1>
        </div>

        <ul>
            <li><Link to="/">{isLogged ? 'Home' : ''}</Link></li>

            
            {
                isLogged ? loggedRouter() :  <li><Link to="/login">Login | Register</Link></li>
            } 

        </ul>   
    </header>
    );
}

export default Header;