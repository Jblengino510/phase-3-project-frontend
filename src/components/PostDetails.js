import NavBar from './NavBar';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Link from '@material-ui/core/Link'
import { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'

function PostDetails({ setPosts }) {
    const [ post, setPost ] = useState({})
    const params = useParams()
    const history = useHistory()


    useEffect(() => {
        fetch(`http://localhost:9292/posts/${params.id}`)
        .then(r => r.json())
        .then(data => {setPost({...data})
        })
    }, [])

    function handleDelete() {
        fetch(`http://localhost:9292/posts/${params.id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => setPosts(posts => {
            return posts.filter(post => post.album_name !== data.album_name)
        }))
        history.push('/profile')
    }

    return (
        <div className="detailsWrapper">
            <NavBar />
            <div className="cardWrapper">
                <Card  className="cardDetails" style={{backgroundColor: '#444444'}} elevation={6}>
                    <CardHeader 
                        title={post.album_name}
                    />
                    <img src={post.image_url} alt={post.album_name}/>
                    <h3>{post.artist}</h3>
                    <Button variant="contained" style={{backgroundColor: '#815A34', color: 'white'}}>
                        {post.genre}
                    </Button>
                    <ol>
                        <li>{post.tracklist}</li>
                    </ol>
                    <span>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton style={{marginLeft: '100px'}} onClick={handleDelete} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </span>
                </Card>
            </div>
        </div>
    )
}

export default PostDetails