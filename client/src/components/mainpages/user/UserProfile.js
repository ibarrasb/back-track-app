import React, {useContext, useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import {GlobalState} from '../../../GlobalState'
import MadePost from '../utils/post/Post'
import './profile.css'

function UserProfile() {
    const params = useParams();
    const state = useContext(GlobalState)
    const [users] = state.AllUsersAPI.users
    const [userPosts] = state.PostsAPI.posts
    // const [name] = state.UserAPI.name
    // const [userID] = state.UserAPI.id
    // const [isLogged] = state.UserAPI.isLogged
    // const [callback ,setCallback] = state.UserAPI.callback
    // const [token] = state.token
    const [detailedUser, setDetailedUser] = useState([])
    

    // retrieve detailed user data
    useEffect(()=>{
        if(params.id) {
            users.forEach(user => {
                if(user._id === params.id) {
                    setDetailedUser(user)  
                }  
            })
        }
   
    }, [params.id, users])

    // sets following and followers count to 0, if array is empty
    let following = detailedUser.following
    if(following == null) following = []

    let followers = detailedUser.followers
    if(followers == null) followers = []


    return (
        <div>
            <div className="profile-header">
            <h1>{detailedUser.name}</h1>
            <h2>@{detailedUser.username}</h2>
            <div className="follows">
            <h2 className="following">Following: {following.length}</h2>
            <h2 className="followers">Followers: {followers.length}</h2>
            </div>
            </div>

            <div className="post-made">
            {
                // only returns posts made by user that matches id
                userPosts.slice(0).reverse().map(post => {
                    if(post.id === params.id){
                    return <MadePost key={post._id} post={post}/>
                    }
                })
            } 
            </div>
            
        </div>
    );
}

export default UserProfile;