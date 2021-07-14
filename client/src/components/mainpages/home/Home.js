import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState'
import './home.css'
import Posts from '../posts/posts'
import CreatePost from '../createPost/CreatePost'
import axios from 'axios'


function Home() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged

    const getUsers = async () => {
    const res = await axios.get('/user/users')
    console.log(res.data)
    }
    getUsers()
 

 
   

    return (
        <div className="home-section">
            <h1 className="home-page"> {isLogged ? 'Shower Thoughts' : 'Home'}</h1>
            <CreatePost className="post-bar"/>
            <Posts className="post-made"/>
        </div>
       
    );
}

export default Home;