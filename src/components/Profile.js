import PostCard from './PostCard'
import NavBar from './NavBar'
import Grid from '@material-ui/core/Grid'


function Profile({ posts, loggedInUser, setLoggedInUser }) {
    const userPosts = posts.filter(post => post.user_id === loggedInUser.id)
    const renderedUserPosts = userPosts.map(post => 
        <Grid item xs={12} md={6} lg={4} key={post.id}><PostCard post={post} /></Grid>)
    return (
        <div className='profile'>
            <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            <Grid container spacing={10} style={{marginTop: '150px'}}>
                {renderedUserPosts}
            </Grid>
        </div>
    )
}

export default Profile