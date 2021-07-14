import axios from 'axios'
import React, {createContext, useEffect, useState} from 'react'
import UserAPI from './api/UserAPI'
import PostsAPI from './api/PostsAPI'
import AllUsersAPI from './api/AllUsersAPI'

export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)

    const refreshToken = async () =>{
        const res = await axios.get('/user/refresh_token')
        
        setToken(res.data.accesstoken)
    }    
    useEffect(() =>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()
    }, [])

const state = {
    token: [token, setToken],
    UserAPI: UserAPI(token),
    PostsAPI: PostsAPI(),
    AllUsersAPI: AllUsersAPI()

}
    return (
        <GlobalState.Provider value={state}>
        {children}
        </GlobalState.Provider>
    )
}