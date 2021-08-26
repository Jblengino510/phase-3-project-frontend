import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useState} from 'react'
import { useHistory } from 'react-router-dom'

function PostForm() {
    const [ formData, setFormData ] = useState({
        album_name: "",
        image_url: "",
        artist: "",
        genre: "",
        tracklist: ""

    })

    function handleFormChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="postForm">
            <form>
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Album Name" 
                variant="outlined"
                color="secondary"
                name="album_name"
                value={formData.album_name}
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
                value={formData.image_url}
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
                value={formData.artist}
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
                value={formData.genre}
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
                value={formData.tracklist}
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