import {useState, useEffect} from 'react'
import axios from 'axios'


function ReplyAPI() {
    const [reply, setReply] = useState([])
    const [callback, setCallback] = useState(false)
   

    useEffect(() =>{
        
        //retrives all the commens made on every post
        const getReply = async () => {
            const res = await axios.get('/api/reply')
            setReply(res.data)
        }
        getReply()
    },[callback])
    
    return {
        replies: [reply, setReply],
        callback: [callback, setCallback]
    }
}

export default ReplyAPI