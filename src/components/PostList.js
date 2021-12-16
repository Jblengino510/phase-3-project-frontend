import PostCard from './PostCard'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    postListContainer: {
        backgroundColor: '#333',
        backgroundSize: 'cover',
        marginTop: '150px'
    }
})


function PostList({ posts }) {
    const classes = useStyles()
    const renderedPosts = posts.map(post => 
        <Grid item xs={12} md={6} lg={4} key={post.id}><PostCard post={post} /></Grid>)

    return (
            <div className={classes.postListContainer}>
                    <Grid container spacing={10}>
                        {renderedPosts}
                    </Grid>
            </div>
    )
}

export default PostList