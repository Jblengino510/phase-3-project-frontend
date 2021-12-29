import LandingPage from './LandingPage';
import NavBar from './NavBar'
import SignUp from './SignUp';
import Login from './Login'
import Profile from './Profile'
import PostForm from './PostForm'
import PostDetails from './PostDetails'
import PostList from './PostList'
import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core';
import '@fontsource/roboto'



function App() {
  const [ loggedInUser, setLoggedInUser ] = useState(JSON.parse(localStorage.getItem('user')))
  const [ posts, setPosts ] = useState([])
  const [ loading, setLoading ] = useState(false)


  useEffect(() => {
    fetch('http://localhost:9292/posts')
    .then(res => {
      if (res.ok) {
        res.json().then(setPosts).then(setLoading(true))
      }
    })
  }, [])

  
  
  return (
      <div>
          <Switch>
            <Route path='/dig'>
              <PostList posts={posts} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            </Route>
            <Route path="/signup">
                <SignUp setLoggedInUser={setLoggedInUser}/>
            </Route>
            <Route path="/login">
                <Login setLoggedInUser={setLoggedInUser}/>
            </Route>
            <Route path="/profile">
                <Profile posts={posts} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            </Route>
            <Route path="/posts/:id">
                <PostDetails setPosts={setPosts} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            </Route>
            <Route path="/submit">
                <PostForm posts={posts} setPosts={setPosts}/>
            </Route>
            <Route path="/">
              <LandingPage loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/> 
            </Route>
          </Switch>
      </div>
  )
}

export default App;
