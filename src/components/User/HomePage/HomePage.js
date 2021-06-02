import React from 'react'
import {Navbar} from '../../Common';
import {Route} from 'react-router-dom';
import {Login,Signup} from '../../Registration'
export default function HomePage() {
    return (
        <div className="container">
        <h1 className="main-heading">Welcome to user Homepage</h1> 
        <div className="disclaimer">
            Welcome to the connectify a social application platform.
            This is sprint 1 in which we will mainly focus on user registration
            functionality.
        </div>
        </div>
    )
}
