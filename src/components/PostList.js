import PostCard from './PostCard'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'


function PostList({ posts }) {
    const renderedPosts = posts.map(post => 
        <Grid key={post.id} item spacing={3} xs={12} md={6} lg={4}><PostCard album_name={post.album_name} image_url={post.image_url} artist={post.artist} genre={post.genre} tracklist={post.tracklist} post={post} /></Grid>)

    return (
            <div className="postList">
                    <Grid container spacing={3}>
                        {renderedPosts}
                    </Grid>
            </div>
    )
}

export default PostList