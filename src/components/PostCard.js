import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { Link } from "react-router-dom"


function PostCard({ album_name, image_url, artist, genre, tracklist, post }) {
    return (
        <div className="cardWrapper">
            <Link to={`/posts/${post.id}`}>
                <div>
                    <Card className="postCard" style={{backgroundColor: '#444444'}} elevation={6}>
                        <CardHeader 
                        title={album_name}
                        />
                        <img src={image_url} alt={album_name}/>
                        <h2>{artist}</h2>
                        <Button variant="contained" style={{backgroundColor: '#815A34', color: 'white'}}>
                            {genre}
                        </Button>
                    </Card>
                </div>
            </Link>
        </div>
    )
}

export default PostCard