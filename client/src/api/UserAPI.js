import {useState, useEffect} from 'react';
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [callback, setCallback] = useState(false)
    const [name, setName] = useState()
    const [username, setUsername] = useState([])
    const [userID, setUserID] = useState()
    const [img, setImg] = useState()
    const [post, setPost] = useState([])
    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })
                    setName(res.data.name)
                    setUsername(res.data.username)
                    setUserID(res.data._id)
                    setIsLogged(true)
                    setPost(res.data.post)
                    setFollowers(res.data.followers)
                    setFollowing(res.data.following)
                    setImg(res.data.img)
                
                    
                } catch (err) {
                    alert(err.response.data.msg)
                    
                }
            }
            getUser()
        }

    },[token])


    const addPost = async (product) => {
        if(!isLogged) return alert("Please login to continue buying")

        const check = post.every(item =>{
            return item._id !== product._id
        })

        if(check){
            setPost([...post, {...product}])

            await axios.patch('/user/addpost', {posts: [...post, {...product}]}, {
                headers: {Authorization: token}
            })

        }else{
            alert("Post has already been made")
        }
    }



    return {
        isLogged: [isLogged, setIsLogged],
        callback: [callback, setCallback],
        name: [name, setName],
        addPost: addPost,
        username: [username, setUsername],
        id: [userID, setUserID],
        image: [img, setImg],
        posts: [post, setPost],
        follwers: [followers, setFollowers],
        following: [following, setFollowing]
    }
}

export default UserAPI
 