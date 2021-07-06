import React from 'react';
import './Post.css';

function Post({post}) {
    return (
        <div>
        <div className="post-box">
        <h2>{post.name}</h2>
        <h2>@{post.username}</h2>
        <h1>{post.post}</h1>
        <p>{post.likes}</p>
    </div>
        </div>
    );
}

export default Post;