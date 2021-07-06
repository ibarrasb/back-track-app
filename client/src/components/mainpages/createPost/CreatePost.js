import React, {useContext, useState}from 'react';
import {GlobalState} from '../../../GlobalState'
import Axios from 'axios';

const initialState = {
    "id": '',
    "name": '',
    "username": '',
    "post": '',
    "replies": [],
    "likes": 0,
    "images": null
}

function CreatePost() {

    const [post, setPost] = useState(initialState)
    const state = useContext(GlobalState)
    const [username] = state.UserAPI.username
    const [name] = state.UserAPI.name
    const [userID] = state.UserAPI.id
    const [isLogged] = state.UserAPI.isLogged
    const [callback ,setCallback] = state.UserAPI.callback
    const [token] = state.token
  
    const handleChangeInput = e =>{
        const {name, value} = e.target
        setPost({...post, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!isLogged) return alert("You're not logged in")

                await Axios.post('/api/posts', {...post}, {
                    headers: {Authorization: token}
                })

            setPost(initialState)
            setCallback(!callback)
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    

  
    return (

        <form onSubmit={handleSubmit}>

        <div>

        <div value={post.id = userID}/>
        <div value={post.name = name}/>
        <div value={post.username = username}/>


        <input type="text" name="post" value ={post.post} onChange={handleChangeInput} placeholder={`Whats on your mind ${ isLogged ? name : ''}`}/>
        <button type="submit" className="" >Post</button>
            
        </div>

        </form>
    );
}

export default CreatePost;