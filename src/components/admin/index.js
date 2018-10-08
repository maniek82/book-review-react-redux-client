import React from 'react';

const User = (props) => {
    console.log("user ", props)
    return (  
    <div className="user_container">
        <div className="avatar">
            <img alt="avatar" src="/images/avatar.png"/>
        </div>
        <div className="nfo">
            <div><span>Name: </span> Name</div>
            <div><span>Lastname: </span>Lastname</div>
            <div><span>Email: </span>Email</div>
        </div>

    </div>);
}
 
export default User;