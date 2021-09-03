import Layout from './Layout';
import LandingPage from './LandingPage';
import NavBar from './NavBar'
import SignUp from './SignUp';
import Login from './Login'
import Profile from './Profile'
import PostForm from './PostForm'
import PostDetails from './PostDetails'
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Themeprovider } from '@material-ui/core/styles'
import '@fontsource/roboto'


function App() {
  const [ allUsers, setAllUsers ] = useState([])
  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/posts')
    .then(res => res.json())
    .then(setPosts)
  }, [])
  // console.log(posts)

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then(res => res.json())
    .then(setAllUsers)
  }, [])
  // console.log(allUsers)

  
  
  return (
      <div>
          <Switch>
            <Route path="/signup">
                <SignUp setAllUsers={setAllUsers}/>
            </Route>
            <Route path="/login">
                <Login />
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
