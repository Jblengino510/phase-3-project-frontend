import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      width: '100%'
    },
    title: {
      flexGrow: 1,
      fontSize: '42px',
      color: 'white'
    },
    navBtn: {
        color: '#888888'
    },
    account: {
        marginLeft: '100px'
    }, 
    navBar: {
        backgroundColor: '#252525'
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
        <div className={classes.root}>
            <AppBar className={classes.navBar} elevation={0}>
                <Toolbar>
                    <IconButton style={{color: '#815A34'}}>
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                    {/* <Avatar src="src/images/crate-of-vinyl.png" variant="square" /> */}
                    <span>
                        <Link to='/'>
                            <strong><h1 className={classes.title}>📦Crate.</h1></strong>
                        </Link>
                    </span>
                    <span>
                        <Button className={classes.navBtn}>
                            Learn More
                        </Button>
                    </span>
                    <span>
                        <Button onClick={() => handleLogout()} className={classes.navBtn}>
                            Logout
                        </Button>
                    </span>
                    <span>
                        <IconButton
                            onClick={() => handleProfileClick()}
                            edge="end"
                            // className={classes.account}
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <AccountCircle fontSize="large"/>
                        </IconButton>
                    </span>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar