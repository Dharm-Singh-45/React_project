
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/userContextProvider'

function App() {
  
  return (
   
    <UserContextProvider>

    
     <Profile/>
     <Login/>
    </UserContextProvider>
    
  )
}

export default App
