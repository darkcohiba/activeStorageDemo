import UserCard from "./UserCard";
import React, { useState } from 'react';

function UserDisplay({user}) {


    console.log(user[0] === undefined ? "it is undefined" : user[0]);

    // function renderCards(users){
    //     const userData = users.map((user)=>{
    //         <h1 className="text-lime-500">{user.name}</h1>
    //     })
    // }


    return (
        <div id="cards">
            {/* {user && user.map((userSolo)=> (
                <div key={userSolo.id}>
                    <h3>{userSolo.name}</h3>
                </div>
            ))} */}
        </div>
    )
}

export default UserDisplay;