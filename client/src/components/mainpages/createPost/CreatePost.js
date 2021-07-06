import React, {useContext, useState, useEffect}from 'react';
import {GlobalState} from '../../../GlobalState'
import Axios from 'axios';
import SendIcon from '@material-ui/icons/Send';
import './create.css'

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

    
 
    const state = useContext(GlobalState)
    const [username] = state.UserAPI.username
    
    const [name] = state.UserAPI.name
    const [userID] = state.UserAPI.id
    const [isLogged] = state.UserAPI.isLogged
    const [callback ,setCallback] = state.UserAPI.callback
    const [token] = state.token

    const [post, setPost] = useState(initialState)
    const [detailPost, setDetailPost] = useState([])
    const addPost = state.UserAPI.addPost

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setPost({...post, [name]:value})
 
    }

    const handleSubmit = async e =>{

        e.preventDefault()
        try {

            if(!isLogged) return alert("You're not logged in")

            //Adds post to the post schema
                await Axios.post('/api/posts', {...post}, {
                    headers: {Authorization: token}
                })
            //Assigns post to specific user
            //     await Axios.patch('/user/addpost', {...post}, {
            //         headers: {Authorization: token}
            //     })
            // console.log( await Axios.patch('/user/addpost', {...post}, {
            //     headers: {Authorization: token}
            // }))
            
            
            addPost(post)
            setPost(initialState)
            setCallback(!callback)
            // window.location.reload()
            
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

        <div className="text-search">
        <input type="text" name="post" className="in-post" value ={post.post} onChange={handleChangeInput} placeholder={`Whats on your mind ${ isLogged ? name : ''}`}>
        </input>
        <button type="submit" className="btn-post" ><SendIcon></SendIcon></button>
        </div> 
        </div>

        </form>
    );
}

export default CreatePost;