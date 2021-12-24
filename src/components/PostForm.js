import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        color: 'white'
    },
    postForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%'
    },
    divider: {
        backgroundColor: '#252525',
        width: '5%',
        height: '3px',
        marginTop: '40px',
        marginBottom: '40px'
    },
})

function PostForm({ posts, setPosts }) {
    const [ postData, setPostData ] = useState({
        album_name: "",
        image_url: "",
        artist: "",
        genre: "",
        tracklist: ""

    })
    const history = useHistory()
    const classes = useStyles()

    function handleFormChange(e){
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    function handlePostSubmit(e){
        e.preventDefault()
        fetch('http://localhost:9292/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(newPost => setPosts([newPost, ...posts]))
         setPostData({
            album_name: "",
            image_url: "",
            artist: "",
            genre: "",
            tracklist: ""
        })
    }

    return (
        <div className={classes.container}>
            <Typography variant='h3' style={{color: 'white', marginTop: '100px'}}>
                Add to your Crate
            </Typography>
            <Divider className={classes.divider}/>
            <form onSubmit={handlePostSubmit} className={classes.postForm}>
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Album Name" 
                variant="outlined"
                color="secondary"
                name="album_name"
                value={postData.album_name}
                onChange={handleFormChange}
                required
                />
                <br />
                <br />
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Image URL" 
                variant="outlined"
                color="secondary"
                name="image_url"
                value={postData.image_url}
                onChange={handleFormChange}
                required
                />
                <br />
                <br />
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Artist" 
                variant="outlined"
                color="secondary"
                name="artist"
                value={postData.artist}
                onChange={handleFormChange}
                required
                />
                <br />
                <br />
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Genre" 
                variant="outlined"
                color="secondary"
                name="genre"
                value={postData.genre}
                onChange={handleFormChange}
                required
                />
                <br />
                <br />
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Tracklist" 
                variant="outlined"
                color="secondary"
                name="tracklist"
                value={postData.tracklist}
                onChange={handleFormChange}
                required
                />
                <br />
                <br />
                <Button 
                variant="contained"
                style={{backgroundColor: '#815A34', color: 'white'}}
                type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default PostForm