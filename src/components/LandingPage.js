import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import { Link } from "react-router-dom"

const useStyles = makeStyles({
    navBar: {
        backgroundColor: 'inherit',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '20px'

    },
    title: {
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
        marginLeft: '10px'
    },
    navBtn: {
        color: '#888888',
        marginRight: '20px',
        '&:hover': {cursor: 'pointer', color: 'white', borderBottom: '3px solid #815A34'}
    },
    signupBtn: {
        backgroundColor: '#815A34',
        color: 'white',
        marginRight: '20px'
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: 0,
        color: 'white',
        height: '100vh',
        // paddingTop: '150px'
    },
    landingPage: {
        backgroundColor: 'rgb(0, 0, 0, .8)',
        backgroundImage: 'url("/vinyl gif.gif")',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover'
    }
})


function LandingPage() {
    const classes = useStyles()


    return (
        <div className={classes.landingPage}>
            <Grid container>
                <Grid item xs={12} className={classes.navBar}>
                    <Link to='/' className={classes.title}>
                        <img src='/dvd.png' alt='Crate. logo' style={{height: '80px', width: '80px'}}/>
                        <Typography variant="h2">Crate.</Typography>
                    </Link>
                    <Button className={classes.navBtn}>
                        Learn More
                    </Button>
                    <Button href="/login" className={classes.navBtn}>
                        Login
                    </Button>
                    <Button href="/signup" variant="contained" className={classes.signupBtn}>
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={10} className={classes.body}>
                <Grid item xs={12}>
                    <Typography varient='h1' style={{fontSize: '100px'}}>
                        Dig through crates.
                    </Typography>
                <Grid item xs={12}>
                    <Typography varient='h1' style={{fontSize: '100px'}}>
                        Discover 💎's.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography varient='h1' style={{fontSize: '42px'}}>
                        A community of crate diggers.
                    </Typography>
                </Grid>
                <br />
                <br />
                <Grid item xs={12}>
                    <Button href="/signup" variant="contained" className={classes.signupBtn} style={{padding: "20px", width: "30%"}}>
                        Try for Free
                    </Button>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage