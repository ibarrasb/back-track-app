import React, {useContext} from 'react';
import './Post.css';
import Axios from 'axios';
import {GlobalState} from '../../../../GlobalState'

function Post({post}) {
    
    const state = useContext(GlobalState)
    const [token] = state.token

    // const removePost = async(id) =>{
    //     if(window.confirm("Do you want to delete this post?")){
            
    //         post.forEach((item, index) => {
    //             if(item._id === id){
    //                 post.splice(index, 1)
    //             }
    //         })
    
    //         await Axios.patch('/user/addpost', {...post}, {
    //             headers: {Authorization: token}
    //         })
    
           
    //     }
    // }
    return (
        <div>
        <div className="post-box">
        <h2>{post.name}</h2>
        <h2>@{post.username}</h2>
        <h1>{post.post}</h1>
        <p>{post.likes}</p>
        <p>{new Date(post.createdAt).toLocaleString()}</p>
       
    </div>
        </div>
    );
}

export default Post;