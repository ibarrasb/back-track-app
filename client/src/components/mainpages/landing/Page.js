import React from 'react';
import {Link} from 'react-router-dom'

function Page() {
    return (
        <div>
            Home
            <button><Link to="/register">REGISTER</Link></button>
        </div>
    );
}

export default Page;