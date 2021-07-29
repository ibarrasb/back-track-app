import React, {useContext, useState} from 'react';
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios';
import './header.css'
import Shower from '../../images/shower-solid.svg'
import Thought from '../../images/comment-solid.svg'
import Menu from './icons/bars-solid.svg'
import Close from './icons/times-circle-regular.svg'


function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged
    const [menu, setMenu] = useState(false)
    const [userID] = state.UserAPI.id


    //logs user out
    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href = "/"
    }

    //if user is logged, it shows appropriate menu
    const loggedRouter = () => {

        return(
            <div>
            <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            <li><Link to={`/profile/${userID}`}>Profile</Link></li>
            </div>
        )
    }

    //displays svg icons for home 
    const hNew = () =>{
        return(
            <div className="header-img">
            <img src={Shower} alt="" className="shower" />
            <img src={Thought} alt="" className="thought" />
          </div>
        )
    }

    //styled component
    const styleMenu = {
        left: menu ? 0 : "-100%",
        
    }

    return (
    <header className="head-er">

            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

        <div className='logo'>
            <h1>
                    <Link to="/">{isLogged ? hNew() : ''}</Link>
            </h1>
        </div>

        <ul style={styleMenu}>
            <li><Link to="/">{isLogged ? 'Home' : ''}</Link></li>

            {
                isLogged ? loggedRouter() :  <li><Link to="/login">Login</Link></li>
            } 
            <li onClick={() => setMenu(!menu)}>
            <img src={Close} alt="" width="30" className="menu" />
        </li>

        </ul>   
    </header>
    );
}

export default Header;