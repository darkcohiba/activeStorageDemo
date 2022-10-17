// import UserCard from "./UserCard";
import React, { useState } from 'react';

function UserDisplay({users}) {
    return (
        <div id="cards" className="grid">
            {users.map((userSolo)=> (
                <div className="border-4 my-8 border-indigo-500/50 justify-self-center hover:border-yellow-500" key={userSolo.id}>
                    <h3 className="text-lime-500" >{userSolo.name}</h3>
                    <p className="text-lime-500">{userSolo.age}</p>
                    <p className="text-lime-500">{userSolo.sex}</p>
                    <img className="w-28 h-28 rounded-full" src={userSolo.image_url} />
                </div>
            ))}
        </div>
    )
}

export default UserDisplay;