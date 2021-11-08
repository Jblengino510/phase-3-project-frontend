import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    navBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px',
        margin: 0
    },
    title: {
        color: 'white',
        fontSize: '54px'
    },
    navBtn: {
        color: '#888888'
    },
    signupBtn: {
        backgroundColor: '#815A34',
        color: 'white'
    },
    body: {
        // backgroundColor: 'white',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '10px',
        margin: 0,
        color: 'white'
    }
})

function LandingPage() {

    const classes = useStyles()


    return (
        <div>
            <Grid container spacing={10} className={classes.navBar}>
                <Grid item xs={6}>
                    <Typography varient="h1" className={classes.title}>
                        📦Crate.
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button className={classes.navBtn}>
                        Learn More
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button href="/login" className={classes.navBtn}>
                        Login
                    </Button>
                </Grid>
                <Grid item xs={2}>
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
                <Grid item xs={12}>
                    <Button href="/signup" variant="contained" className={classes.signupBtn} style={{padding: "20px", width: "30%", marginTop: "20px"}}>
                        Try for Free
                    </Button>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage