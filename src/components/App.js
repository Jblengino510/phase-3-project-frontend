import LandingPage from './LandingPage';
import NavBar from './NavBar'
import SignUp from './SignUp';
import Login from './Login'
import Profile from './Profile'
import PostForm from './PostForm'
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { Themeprovider } from '@material-ui/core/styles'
import '@fontsource/roboto'


function App() {
  const [ allUsers, setAllUsers ] = useState([])
  const [ posts, setPosts ] = useState([])
  const [ loggedInUser, setLoggedInUser ] = useState(null)

  // useEffect(() => {
  //   fetch('http://localhost:9292/posts')
  //   .then(res => res.json())
  //   .then(setPosts)
  // }, [])
  // console.log(posts)

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then(res => res.json())
    .then(setAllUsers)
  }, [])
  console.log(allUsers)
  
  return (
      <div style={{backgroundColor: '#333'}}>
        <Switch>
          <Route path="/signup">
              <SignUp />
          </Route>
          <Route path="/login">
              <Login allUsers={allUsers}/>
          </Route>
          <Route path="/profile">
              <Profile />
          </Route>
          <Route path="/submit">
              <PostForm />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
  )
}

export default App;
