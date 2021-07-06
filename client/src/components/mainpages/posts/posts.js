/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import MadePost from '../utils/post/Post'
import axios from 'axios'

function posts() {
    
    const state = useContext(GlobalState)
    const [posts, setPosts] = state.PostsAPI.posts
    const [token] = state.token
    const [callback, setCallback] = state.PostsAPI.callback
    const [userID] = state.UserAPI.id


    

    const deletePost = async(id) => {
        try {

            // const destroyImg = axios.post('/api/destroy', {public_id},{
            //     headers: {Authorization: token}
            // })

            const deletePost = axios.delete(`/api/posts/${id}`, {
                headers: {Authorization: token}
            })

         
            await deletePost

            setCallback(!callback)
          
        } catch (err) {
            alert(err.response.data.msg)
        }
    }
  
    return (
        <div className="post-made">
            {
                posts.map(post => {
                    return <MadePost key={post._id} post={post}
                     />
                })
            } 
        </div>
    );
}

export default posts