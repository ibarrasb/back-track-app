import React, {useContext} from 'react';
import './Post.css';
import Axios from 'axios';
import {GlobalState} from '../../../../GlobalState'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';


function Post({post}) {
    
    const state = useContext(GlobalState)
    const [token] = state.token
    const [userID] = state.UserAPI.id

    const removePost = async(id) =>{

        if(window.confirm("Do you want to delete this post?")){
            
          const res = await Axios.delete(`/api/posts/${id}`,{
            headers: {Authorization: token}
        })

        alert(res.data.msg)
    
        }
    }

    

    const doublePlay = (id) => {
        removePost(id)
        reLoad()

    }

    const deletePost = () => {


        return (

            <button>
        <DeleteOutlineOutlinedIcon onClick={() => doublePlay(post._id)} className="delete"/>
        </button>

        )
        
    }
    const reLoad = () => {

        window.location.reload()
    }


    return (
        <div>
        <div className="post-box">
        <div className="user-info">
        <h2 className="name">{post.name}</h2>
        <h2 className="username">@{post.username}</h2>

    

        {
            userID === post.id ? deletePost() : ''
        }

        </div>
        

        <h1>{post.post}</h1>

        <div className="post-info">

        <div className="likes-box">
        <p className="likes">{post.likes}</p>
        <button>
        <ThumbUpAltIcon/>
        </button>
        </div>
        <p className="date">{new Date(post.createdAt).toLocaleString()}</p>
        </div>
       
    </div>
        </div>
    );
}

export default Post;