import PostCard from './PostCard'
import Grid from '@material-ui/core/Grid'


function PostList({ posts }) {
    const renderedPosts = posts.map(post => 
        <Grid key={post.id} item spacing={3} xs={12} md={8} lg={6}><PostCard album_name={post.album_name} image_url={post.image_url} artist={post.artist} genre={post.genre} tracklist={post.tracklist} post={post} /></Grid>)

    return (
        <div>
                <Grid container spacing={3}>
                    {renderedPosts}
                </Grid>
        </div>
    )
}

export default PostList