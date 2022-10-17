import logo from './logo.svg';
import UserForm from './UserForm';
import UserDisplay from './UserDisplay';
import { useState, useEffect } from 'react';



function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])
  // const [name, setName] = useState("")
  // const [age, setAge] = useState(0)
  // const [sex, setSex] = useState("")
  // const [image, setImage] = useState({})
  

  useEffect(() => {
    fetch("/users")
    .then(response => response.json())
    .then(data => {
      setUsers(data)
    })   
  }, []);
  // console.log(user)

  // function submitUser(e){
  //     e.preventDefault();
  //     const newForm = new FormData();
  //     newForm.append("name", name)
  //     newForm.append("age", age)
  //     newForm.append("sex", sex)
  //     newForm.append("image", image)
  //     fetch('/users', {
  //         method: 'post',
  //         body: newForm,
  //     })
  //     .then(response => response.json())
  //     .then(data => setUser(...user, data))
  // }

  // console.log(user)


  return (
    <div className="bg-black bg-cover">
      <h1 className="text-lime-400">Welcome</h1>
      {/* <UserForm  submitUser={submitUser} setAge={setAge} setName={setName} setSex={setSex} setImage={setImage}/> */}
      <UserForm setUsers={setUsers} users={users} />
      <UserDisplay 
        users={users}
      />
    </div>
  );
}

export default App;
