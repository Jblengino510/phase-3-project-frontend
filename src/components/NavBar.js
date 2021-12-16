import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography'
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
      color: 'white',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flexGrow: 1
    },
    navBtn: {
        color: '#888888',
        marginRight: '20px'
    },
    navBar: {
        backgroundColor: '#252525',
        width: '100%',
        padding: '10px'
    }
  });



function NavBar() {
    const classes = useStyles()
    const history = useHistory()

    function handleLogout() {
        history.push('/')
    }

    function handleProfileClick() {
        history.push('/profile')
    }


    return (
        <div>
            <AppBar className={classes.navBar} elevation={0}>
                <Toolbar>
                    <Link to='/' className={classes.title}>
                        <img src='/dvd.png' alt='Crate. logo' style={{height: '100px', width: '100px'}}/>
                        <Typography variant="h2">Crate.</Typography>
                    </Link>
                    <Button className={classes.navBtn}>
                        Learn More
                    </Button>
                    <Button onClick={() => handleLogout()} className={classes.navBtn}>
                        Logout
                    </Button>
                    <IconButton
                        onClick={() => handleProfileClick()}
                        edge="end"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <AccountCircle fontSize="large"/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar