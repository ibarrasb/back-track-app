import {useState, useEffect} from 'react'
import axios from 'axios'



function PostsAPI() {
    const [users, setUsers] = useState([])
    const [callback, setCallback] = useState(false)
   

    useEffect(() =>{
        
        const getUsers = async () => {
            const res = await axios.get('/user/users')
           
            setUsers(res.data)
          
           
        }
        getUsers()
    },[callback])
    
    return {
        users: [users, setUsers],
        callback: [callback, setCallback]
    }
}

export default PostsAPI