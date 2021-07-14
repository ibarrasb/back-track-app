import React, {useContext, useState, useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import {GlobalState} from '../../../GlobalState'

function UserProfile() {
    const params = useParams();
    const state = useContext(GlobalState)
    const [users] = state.AllUsersAPI.users
    // const [name] = state.UserAPI.name
    // const [userID] = state.UserAPI.id
    // const [isLogged] = state.UserAPI.isLogged
    // const [callback ,setCallback] = state.UserAPI.callback
    // const [token] = state.token
    const [detailedUser, setDetailedUser] = useState([])


    useEffect(()=>{
        if(params.id) {
            users.forEach(user => {
                if(user._id === params.id) setDetailedUser(user)
                
            })
        }
    }, [params.id, users])

    console.log(JSON.stringify(detailedUser))


    return (
        <div>
            <h1>{detailedUser.name}</h1>
        </div>
    );
}

export default UserProfile;