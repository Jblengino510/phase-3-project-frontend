import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from "react-router-dom"


function PostCard({ album_name, image_url, artist, genre, tracklist, post }) {
  
    return (
            <Link to={`/posts/${post.id}`}>
                <div>
                    <Card className="postCard" style={{backgroundColor: '#444444'}} elevation={6}>
                        <CardHeader 
                        title={album_name}
                        />
                        <img src={image_url} alt={album_name}/>
                        <h3>{artist}</h3>
                        <Button variant="contained" style={{backgroundColor: '#815A34', color: 'white'}}>
                            {genre}
                        </Button>
                    </Card>
                </div>
            </Link>
    )
}

export default PostCard