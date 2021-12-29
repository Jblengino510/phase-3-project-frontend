import NavBar from './NavBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#444',
        padding: '50px',
        paddingTop: '100px',
        borderRadius: '0px',
        marginTop: '200px',
        width: '1000px',
    },
    image: {
        width: '350px',
        height: '350px',
        borderRadius: '0px',
        // padding: '10px'
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '45%'
    },
    btn: {
        backgroundColor: '#815A34',
        color: 'white',
        marginLeft: '50px'
    },
    tracks: {
        backgroundColor: '#444',
        borderRadius: '0px',
        marginTop: '20px',
        width: '1000px',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'start'
    },
    editForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    }
})


function PostDetails({ setPosts, setLoggedInUser }) {
    const [ post, setPost ] = useState({})
    const [ open, setOpen ] = useState(false)
    const [ albumName, setAlbumeName ] = useState('')
    const [ imageUrl, setImageUrl ] = useState('')
    const [ artist, setArtist ] = useState('')
    const [ genre, setGenre ] = useState('')
    const [ tracklist, setTracklist ] = useState('')
    const params = useParams()
    const history = useHistory()
    const classes = useStyles()

    let eachTrack = post.tracklist ? post.tracklist.split(",") : []

    //Fetches post by Id
    useEffect(() => {
        fetch(`http://localhost:9292/posts/${params.id}`)
        .then(r => r.json())
        .then(data => setPost({...data}))
    }, [])
    
    function handleDelete() {
        if (window.confirm('Are you sure you want to delete this post?')) {
            fetch(`http://localhost:9292/posts/${params.id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => setPosts(posts => {
                return posts.filter(post => post.id !== data.id)
            }))
            history.push('/profile')
        }
    }

    // function handleEditPost() {
    //     const postObj = {
    //         user_id: user.id
    //         album_name: albumName,
    //         image_url: imageUrl,
    //         genre: genre,
    //         artist: artist,
    //         tracklist: tracklist
    //     }
    // }
  
    

    return (
        <div className={classes.container}>
            <NavBar setLoggedInUser={setLoggedInUser}/>
                <Card className={classes.card} elevation={6}>
                    <Grid container>
                        <Grid item xs={5}>
                            <CardMedia component='image' image={post.image_url} className={classes.image}/>
                        </Grid>
                        <Grid item xs={7}>
                            <CardContent>
                                <Typography variant='h4'>
                                    {post.album_name}
                                </Typography>
                                <div className={classes.info}>
                                    <Typography variant='h5'>
                                        <em>{post.artist}</em>
                                    </Typography>
                                    <Button variant="contained" className={classes.btn}>
                                        {post.genre}
                                    </Button>
                                </div>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12}>
                            <IconButton edge='end' onClick={() => setOpen(true)}>
                                <EditIcon fontSize='large'/>
                            </IconButton>
                            <IconButton edge='end' onClick={handleDelete} style={{marginLeft: '10px'}}>
                                <DeleteIcon fontSize='large'/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Card>
                <Card className={classes.tracks} elevation={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            <ol>
                                {eachTrack ? eachTrack.map(track => <li>{track}</li>) : null}
                            </ol>
                        </Grid>
                    </Grid>
                </Card>
                <Modal open={open} 
                onClose={!open} 
                aria-labelledby="modal-modal-title" 
                aria-describedby="modal-modal-description"
                >
                    <div className='modalForm'>
                        <IconButton edge='end' onClick={() => setOpen(false)} style={{marginLeft: '370px', marginTop: '10px'}}>
                            <CloseIcon fontSize='medium'/>
                        </IconButton>
                        <form className={classes.editForm}>
                            <TextField 
                            id="standard-full-width"
                            fullWidth
                            label="Album Name" 
                            variant="outlined"
                            color="secondary"
                            name="album_name"
                            value={post.album_name}
                            onChange={(e) => setAlbumeName(e.target.value)}
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
                            value={post.image_url}
                            onChange={(e) => setImageUrl(e.target.value)}
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
                            value={post.artist}
                            onChange={(e) => setArtist(e.target.value)}
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
                            value={post.genre}
                            onChange={(e) => setGenre(e.target.value)}
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
                            value={post.tracklist}
                            onChange={(e) => setTracklist(e.target.value)}
                            required
                            />
                            <br />
                            <br />
                            <Button 
                            variant="contained"
                            style={{backgroundColor: '#815A34', color: 'white', marginBottom: '20px'}}
                            type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </Modal>
        </div>
    )
}

export default PostDetails