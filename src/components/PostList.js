import PostCard from './PostCard'
import NavBar from './NavBar'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    page: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    postListContainer: {
        backgroundColor: '#252525',
        backgroundSize: 'cover',
        marginTop: '150px',
        width: '95%',
    }
})


function PostList({ posts, loggedInUser, setLoggedInUser }) {
    const classes = useStyles()
    const renderedPosts = posts.map(post => 
        <Grid item xs={12} md={6} lg={4} key={post.id}>
            <PostCard post={post} />
        </Grid>
        )
 

    return (
            <div className={classes.page}>
                <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
                <div className={classes.postListContainer}>
                    <Grid container spacing={5}>
                        {renderedPosts}
                    </Grid>
                </div>
            </div>
    )
}

export default PostList