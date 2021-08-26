import PostCard from './PostCard'

function PostList({ posts }) {
    const renderedPosts = posts.map(post => 
        <PostCard key={post.id} album_name={post.album_name} image_url={post.image_url} artist={post.artist} genre={post.genre} tracklist={post.tracklist}/>)
    return (
        <div>
            {renderedPosts}
        </div>
    )
}

export default PostList