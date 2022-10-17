import React, { useState } from 'react';

export default function UserForm({setUsers, users}) {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [sex, setSex] = useState("")
    const [image, setImage] = useState({})


    function submitUser(e){
        e.preventDefault();
        const newForm = new FormData();
        newForm.append("name", name)
        newForm.append("age", age)
        newForm.append("sex", sex)
        newForm.append("image", image)
        fetch('/users', {
            method: 'post',
            body: newForm,
        })
        .then(response => response.json())
        .then(data => {
            setUsers([...users, data])
        })
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