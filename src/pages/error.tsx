import * as React from 'react';
import { NavLink } from 'react-router-dom';

function Error(){
    return(
        <article>
            <h1>Error!!!!<br/>Click on the link to go home</h1>
            <nav>
                <NavLink to='/home'>Home</NavLink>
            </nav>
        </article>
    )
}

export default Error