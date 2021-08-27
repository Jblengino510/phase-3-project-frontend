import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function PostForm({ posts, setPosts }) {
    const [ postData, setPostData ] = useState({
        album_name: "",
        image_url: "",
        artist: "",
        genre: "",
        tracklist: ""

    })
    const history = useHistory()

    useEffect(() => {
        fetch('http://localhost:9292/posts')
        .then(res => res.json())
        .then(setPosts)
    }, [])

    function handleFormChange(e){
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    function handlePostSubmit(){
        fetch('http://localhost:9292/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(newPost => setPosts([newPost, ...posts]))
        // history.push('/profile')
    }

    return (
        <div className="postForm">
            <h1 style={{color: 'white'}}>Add to your Crate</h1>
            <form onSubmit={handlePostSubmit}>
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Album Name" 
                variant="outlined"
                color="secondary"
                name="album_name"
                value={postData.album_name}
                onChange={handleFormChange}
                />
                <br></br>
                <br></br>
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Image URL" 
                variant="outlined"
                color="secondary"
                name="image_url"
                value={postData.image_url}
                onChange={handleFormChange}
                />
                <br></br>
                <br></br>
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Artist" 
                variant="outlined"
                color="secondary"
                name="artist"
                value={postData.artist}
                onChange={handleFormChange}
                />
                <br></br>
                <br></br>
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Genre" 
                variant="outlined"
                color="secondary"
                name="genre"
                value={postData.genre}
                onChange={handleFormChange}
                />
                <br></br>
                <br></br>
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Tracklist" 
                variant="outlined"
                color="secondary"
                name="tracklist"
                value={postData.tracklist}
                onChange={handleFormChange}
                />
                <br></br>
                <br></br>
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