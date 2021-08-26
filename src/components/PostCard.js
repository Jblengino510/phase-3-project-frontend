import Button from '@material-ui/core/Button'

function PostCard({ album_name, image_url, artist, genre, tracklist }) {
    return (
        <div className="postCard">
            <h1>{album_name}</h1>
            <img src={image_url} alt={album_name}/>
            <h2>{artist}</h2>
            <Button variant="contained" style={{backgroundColor: '#815A34', color: 'white'}}>
                {genre}
            </Button>
            <ol>
                <li>{tracklist}</li>
            </ol>
        </div>
    )
}

export default PostCard