import PostCard from './PostCard'
import NavBar from './NavBar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    page: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        marginTop: '150px',
        backgroundColor: '#444',
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        padding: '20px',
        paddingTop: '20px',
        boxShadow: '5px 5px 5px rgb(27, 27, 27)'

    },
    title: {
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    arrows: {
        color: '#815A34',
        '&:hover': {cursor: 'pointer'}
    }
})


function Profile({ posts, loggedInUser, setLoggedInUser }) {
    const classes = useStyles()
    const userPosts = posts.filter(post => post.user_id === loggedInUser.id)
    const renderedUserPosts = userPosts.map(post => 
        <Grid item xs={3} key={post.id}>
            <PostCard post={post} />
        </Grid>
        )


    return (
        <div className={classes.page}>
            <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
            <Grid container spacing={5} className={classes.container}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant='h4' style={{marginRight: '20px'}}>
                        {loggedInUser.user_name}'s Crate
                    </Typography>
                    <Typography variant='body1' style={{color: '#815A34'}}>
                        See All
                    </Typography>
                    <div style={{flexGrow: 1}}></div>
                    <ArrowBackIosIcon className={classes.arrows}/>
                    <ArrowForwardIosIcon className={classes.arrows}/>
                </Grid>
                {renderedUserPosts}
            </Grid>
            <Grid container spacing={5} className={classes.container}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant='h4' style={{marginRight: '20px'}}>
                        Favorites
                    </Typography>
                    <Typography variant='body1' style={{color: '#815A34'}}>
                        See All
                    </Typography>
                    <div style={{flexGrow: 1}}></div>
                    <ArrowBackIosIcon className={classes.arrows}/>
                    <ArrowForwardIosIcon className={classes.arrows}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Profile