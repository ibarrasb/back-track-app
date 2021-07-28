import React, {useContext, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom';
import CreateReply from '../createReply/CreateReply'
import MadeReply from '../utils/reply/Reply'
import './detail.css'

function DetailPost() {
    const params = useParams();
    const state = useContext(GlobalState);
    const [userPosts] = state.PostsAPI.posts
    const [userID] = state.UserAPI.id
    const [postReplies] = state.ReplyAPI.replies
    const [detailedPost, setDetailedPost] = useState([])


    //seacrh for post that matches the id, to retrieve post and comments
    useEffect(()=>{
        if(params.id) {
            userPosts.forEach(post => {
                if(post._id === params.id) {
                    setDetailedPost(post)
                }  
            })
        }
   
    }, [params.id, userPosts])


    let replies = detailedPost.replies

    console.log(replies)
    if(replies == null) replies = []
    

    return (
        <div className="post-box">
        <div className="user-info">
        <h2 className="name">{detailedPost.name}</h2>
        <h2 className="username"><Link to={`/profile/${detailedPost.id}`}>@{detailedPost.username}</Link></h2>

        {
            userID === detailedPost.id ? 'deletePost()' : ''
        }

        </div>
        <h1 className="post-text">{detailedPost.post}</h1>

        <div className="reply-input">
        <CreateReply />
        </div>

            <div className='comments-txt'/>
          {
                    
                        // only returns posts made by user that matches id
                        postReplies.slice(0).reverse().map(post => {
                            if(post.id === params.id) return <MadeReply key={post._id} post={post} />

                            
                        })
                     
                }
            

            
        </div>
    
    );
}

export default DetailPost;