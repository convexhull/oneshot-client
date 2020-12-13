import React from 'react';
import { Link } from 'react-router-dom'

/**
 * 404 Page not found
 * # When path doesn't match any specified route
 */

//import styles
import classes from './Page404.module.css';

export const Page404: React.FC = () => {
    return (
        <div className={classes["Container"]}>
            <h1>The page you'r looking for doesn't exist!</h1>
            <Link to="/">Take me to Homepage</Link>
        </div>

    )
}


export default Page404;