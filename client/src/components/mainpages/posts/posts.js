/* eslint-disable react-hooks/rules-of-hooks */
import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'
import MadePost from '../utils/post/Post'


function posts() {
    
    const state = useContext(GlobalState)
    const [posts] = state.PostsAPI.posts

    return (
        <div className="post-made">
            {
                posts.slice(0).reverse().map(post => {
                    return <MadePost key={post._id} post={post}
                     />
                })
            } 
        </div>
    );
}

export default posts