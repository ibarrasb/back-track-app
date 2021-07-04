import React from 'react';

function Post({post}) {
    return (
        <div>
        <div className="post-box">
        <h1>{post.username}</h1>
        <h2>{post.post}</h2>
        <p>{post.likes}</p>
    </div>
        </div>
    );
}

export default Post;