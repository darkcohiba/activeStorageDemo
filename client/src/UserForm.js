import React, { useState } from 'react';

export default function UserForm({count, setCount}) {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [sex, setSex] = useState("")
    const [image, setImage] = useState({})
    const form = {
        name,
        age,
        sex,
        image
    }

    function submitUser(e){
        e.preventDefault();
        fetch('/users', {
            method: 'post',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(form)},
            )
        console.log(form)
        setCount(count += 1)
        console.log(count)

    }

    return (
        <div className="grid">
            <h3 className="text-lime-500 justify-self-center">Please fill out this form</h3>
            <form className="justify-self-center">
                <label className="text-lime-500" for="fullName">Full Name:</label>
                <input type="text" className="border-2 border-solid border-yellow-600" id="fullName" name="fullName" onChange={(event) =>setName(event.target.value)}></input>
                <label className="text-lime-500" for="age">Age:</label>
                <input type="text" className="border-2 border-solid border-yellow-600" name="age" onChange={(event) =>setAge(event.target.value)}></input>
                <label className="text-lime-500" for="sex">Sex:</label>
                <input type="text" className="border-2 border-solid border-yellow-600" name="sex" onChange={(event) =>setSex(event.target.value)}></input>
                <label className="text-lime-500" for="image">Profile Image:</label>
                <input type="file" name="image" placeholder="profile image" className="w-28" onChange={(event) =>setImage(event.target.files[0])}></input>
                <button className="bg-slate-50" onClick={submitUser}>Submit</button>
            </form>
        </div>
    )
}