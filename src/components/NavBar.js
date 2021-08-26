import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';



function NavBar() {
    return (
        <div>
            <AppBar className="navBar" style={{backgroundColor: '#333'}}>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <span>
                        <strong><h1 style={{color: 'white'}}>📦Crate.</h1></strong>
                    </span>
                    <span>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        style={{float: 'right'}}
                    >
                        <AccountCircle />
                    </IconButton>
                    </span>
                </Toolbar>
            </AppBar>
            {/* <span>
                <Button style={{color: '#888888'}}>
                    Learn More
                </Button>
                <Button style={{color: '#888888'}}>
                    Login
                </Button>
                <Button href="/signup" variant="contained" style={{backgroundColor: '#815A34', color: 'white'}}>
                    Logout
                </Button>
             </span> */}
        </div>
    )
}

export default NavBar