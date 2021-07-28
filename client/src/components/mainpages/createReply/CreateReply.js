import React, {useContext, useState}from 'react';
import {GlobalState} from '../../../GlobalState'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { TextField } from '@material-ui/core';

import './reply.css'

const initialState = {
    "id": '',
    "name": '',
    "username": '',
    "post": '',
    "images": null
}

function CreateReply() {

    const params = useParams();
    const state = useContext(GlobalState)
    const [username] = state.UserAPI.username
    const [name] = state.UserAPI.name
    const [isLogged] = state.UserAPI.isLogged
    const [callback ,setCallback] = state.UserAPI.callback
    const [token] = state.token
    const [post, setPost] = useState(initialState)
    
    const handleChangeInput = e =>{
        const {name, value} = e.target
        setPost({...post, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        
        try {

            if(!isLogged) return alert("You're not logged in")

            //Adds post to the post schema
                await Axios.post('/api/reply', {...post}, {
                    headers: {Authorization: token}
                })
           
            setPost(initialState)
            setCallback(!callback)
            window.location.reload()
            
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (

        <form onSubmit={handleSubmit}>

        <div>

        <div value={post.id = params.id}/>
        <div value={post.name = name}/>
        <div value={post.username = username}/>
    
        <div className="text-search">
        <TextField id="outlined-basic" label='reply' variant="outlined" type="text" name="post" className="in-post" value ={post.post} onChange={handleChangeInput} >
        </TextField>
        <button type="submit" className="btn-post" ></button>
        </div> 
       
        </div>

        </form>
    );
}

export default CreateReply;