import React,{useState,useContext} from 'react'
import UserContext from '../Context/userContext'


function Login() {
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const{setUser} =  useContext(UserContext)

    const handelSubmit = (e) =>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
      <h2>login</h2>
      <input type='text' placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)}/>
      <input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login
