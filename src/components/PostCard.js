import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography'
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#815A34',
        color: 'white',
        marginBottom: '20px',
        width: '50%'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        width: '300px',
        backgroundColor: 'inherit',
        borderRadius: '0px',
        color: 'white',
        // '&:hover': {backgroundColor: 'rgba(0, 0, 0, .1)', backgroundBlendMode: 'multiply'}
    }
})


function PostCard({ post }) {
    const classes = useStyles()
    const { id, album_name, image_url, artist, genre } = post


    return (
            <div style={{width: '250px'}}>
                <Link to={`/posts/${id}`}>
                    <Card className={classes.card} elevation={0}>
                        <img src={image_url} alt={album_name}/>
                        <br />
                        <Typography variant="h6">
                            <strong>{album_name}</strong>
                        </Typography>
                        <br />
                        <Typography variant='body1'>
                            <em>{artist}</em>
                        </Typography>
                        <br />
                        <Button variant="contained" className={classes.btn}>
                            {genre}
                        </Button>
                    </Card>
                </Link>
            </div>
    )
}

export default PostCard