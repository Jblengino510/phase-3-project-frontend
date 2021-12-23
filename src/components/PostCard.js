import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#815A34',
        color: 'white',
        marginBottom: '20px'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '450px',
        padding: '10px',
        boxShadow: '5px 5px 5px rgb(27, 27, 27)',
        backgroundColor: '#444',
        borderRadius: '0px',
        '&:hover': {backgroundColor: 'rgba(0, 0, 0, .1)', backgroundBlendMode: 'multiply'}
    }
})


function PostCard({ post }) {
    const classes = useStyles()
    const { id, album_name, image_url, artist, genre } = post


    return (
            <Link to={`/posts/${id}`}>
                <div>
                    <Card className={classes.card} elevation={6}>
                        <CardHeader 
                        title={album_name}
                        />
                        <img src={image_url} alt={album_name}/>
                        <h3>{artist}</h3>
                        <Button variant="contained" className={classes.btn}>
                            {genre}
                        </Button>
                    </Card>
                </div>
            </Link>
    )
}

export default PostCard