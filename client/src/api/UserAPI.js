import {useState, useEffect} from 'react';
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [callback, setCallback] = useState(false)
    const [name, setName] = useState()
    const [username, setUsername] = useState([])
    const [userID, setUserID] = useState()
    const [img, setImg] = useState()
    const [tweet, setTweet] = useState([])
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
                    setTweet(res.data.posts)
                    console.log("HERE"+JSON.stringify(res.data))
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


    const addPost = async (posts) => {
        if(!isLogged) return alert("Please login")

 
            setTweet([...tweet, {posts}])

            await axios.patch('/user/addpost', {posts: [...tweet, {posts}]}, {
                headers: {Authorization: token}
            })

                 //     await Axios.patch('/user/addpost', {...post}, {
            //         headers: {Authorization: token}
            //     })

           

       
    }



    return {
        isLogged: [isLogged, setIsLogged],
        callback: [callback, setCallback],
        name: [name, setName],
        addPost: addPost,
        username: [username, setUsername],
        id: [userID, setUserID],
        image: [img, setImg],
        posts: [tweet, setTweet],
        follwers: [followers, setFollowers],
        following: [following, setFollowing]
    }
}

export default UserAPI
 