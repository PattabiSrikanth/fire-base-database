// DATA posted in firebase database
import React,{useState} from 'react'
import axios from 'axios'

const App=()=>{
  const [data,setData]=useState({
    username:"",
    email:"",
    password:"",
    conformpassword:""
  })
  const{username,email,password,conformpassword}=data;
  const changeHandler=e=>{
       setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    axios.post('https://srikanth-3d9a3-default-rtdb.firebaseio.com/register.json',data).then(()=> alert("Submitted Successfully"))
   
    
  }
  return (
    <div>
      <center>
           <form onSubmit={submitHandler} >
            <input type="text" placeholder="username" name="username" value={username}  onChange={changeHandler} / ><br/>
            <input type="email" placeholder="email" name="email" value={email} onChange={changeHandler}/> <br/>
            <input type="password" placeholder="password" name="password" value={password} onChange={changeHandler}/> <br/>
            <input type="password" placeholder="conform password" name="conformpassword" value={conformpassword} onChange={changeHandler}/> <br/>
            <input type="submit" name="submit" />
           </form>
      </center>

    </div>
  )
}
export default App;
