import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState'
import { TextField } from '@material-ui/core';

function Search() {
    //searches for user profiles 

    const state = useContext(GlobalState)
    const [users] = state.AllUsersAPI.users

    return (
        <div>
        
        <TextField id="outlined-basic" label='Search by username' variant="outlined" type="text" name="post" className="in-post" >
        </TextField>
            
        </div>
    );
}

export default Search;