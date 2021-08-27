import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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
        <div className="postCard">
            <h1>{post.album_name}</h1>
            <img src={post.image_url} alt={post.album_name}/>
            <h2>{post.artist}</h2>
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
                <IconButton onClick={handleDelete} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </span>
        </div>
    )
}

export default PostDetails