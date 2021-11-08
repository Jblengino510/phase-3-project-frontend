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
import { Themeprovider } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core';
import '@fontsource/roboto'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))


function App() {
  const [ allUsers, setAllUsers ] = useState([])
  const [ posts, setPosts ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    fetch('http://localhost:9292/posts')
    .then(res => res.json())
    .then(setPosts)
    setLoading(true)
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
              {loading ? <LandingPage /> : <Backdrop className={classes.backdrop}><CircularProgress color="inherit" /></Backdrop>}
            </Route>
          </Switch>
      </div>
  )
}

export default App;
