
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
     <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
