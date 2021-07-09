import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState'
import './home.css'
import Posts from '../posts/posts'
import CreatePost from '../createPost/CreatePost'


function Home() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged
    const [name] = state.UserAPI.name

 
   

    return (
        <div className="home-section">
            <h1 className="home-page"> {isLogged ? `Welcome back ${name}` : 'Home'}</h1>
            <CreatePost className="post-bar"/>
            <Posts className="post-made"/>
        </div>
       
    );
}

export default Home;