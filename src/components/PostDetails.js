import NavBar from './NavBar';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
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
    cardDetails: {
        backgroundColor: '#444',
        padding: '50px',
        paddingTop: '100px',
        borderRadius: '0px',
        marginTop: '200px',
        width: '75%'
    },
    image: {
        width: '350px',
        height: '350px',
        borderRadius: '0px'
    },
    info: {
        marginTop: '180px',
        display: 'flex',
        flexDirection: 'row'
    },
    btn: {
        backgroundColor: '#815A34',
        color: 'white',
        marginLeft: '50px'
    },
    tracks: {
        backgroundColor: '#444',
        marginTop: '20px',
        width: '1000px',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'start'
    }
})


function PostDetails({ setPosts }) {
    const [ post, setPost ] = useState({})
    const params = useParams()
    const history = useHistory()
    const classes = useStyles()

    //Fetches post by Id
    useEffect(() => {
        fetch(`http://localhost:9292/posts/${params.id}`)
        .then(r => r.json())
        .then(data => setPost({...data}))
    }, [])
    
    function handleDelete() {
        fetch(`http://localhost:9292/posts/${params.id}`, {
          method: "DELETE"
        })
        .then(res => res.json())
        .then(data => setPosts(posts => {
            return posts.filter(post => post.id !== data.id)
        }))
        history.push('/profile')
    }

    let eachTrack = post.tracklist ? post.tracklist.split(",") : []
  
    

    return (
        <div className={classes.container}>
            <NavBar />
                <Card className={classes.cardDetails} elevation={6}>
                    <Grid container>
                        <Grid item xs={4}>
                            <CardMedia component='image' image={post.image_url} className={classes.image}/>
                        </Grid>
                        <Grid item xs={8}>
                            <div>
                                <Typography variant='h3'>
                                    {post.album_name}
                                </Typography>
                            </div>
                            <div className={classes.info}>
                                <Typography variant='h4'>
                                    <em>{post.artist}</em>
                                </Typography>
                                <Button variant="contained" className={classes.btn}>
                                    {post.genre}
                                </Button>
                            </div>
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
        </div>
    )
}

export default PostDetails