import Layout from './Layout';
import LandingPage from './LandingPage';
import NavBar from './NavBar'
import SignUp from './SignUp';
import Login from './Login'
import Profile from './Profile'
import PostForm from './PostForm'
import PostDetails from './PostDetails'
import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core';
import '@fontsource/roboto'



function App() {
  const [ allUsers, setAllUsers ] = useState([])
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
  // console.log(posts)

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then(res => res.json())
    .then(setAllUsers)
    setLoading(true)
  }, [])
  // console.log(allUsers)

  
  
  return (
      <div>
          <Switch>
            <Route path="/signup">
                <SignUp setAllUsers={setAllUsers}/>
            </Route>
            <Route path="/login">
                {loading ? <Login /> : <h1>LOADING...</h1>}
            </Route>
            <Route path="/profile">
                <Profile posts={posts}/>
            </Route>
            <Route path="/posts/:id">
                <PostDetails setPosts={setPosts} />
            </Route>
            <Route path="/submit">
                <PostForm posts={posts} setPosts={setPosts}/>
            </Route>
            <Route path="/">
              <LandingPage /> 
            </Route>
          </Switch>
      </div>
  )
}

export default App;
