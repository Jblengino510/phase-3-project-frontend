import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from "react-router-dom"



function NavBar() {
    return (
        <div>
            <AppBar className="navBar" style={{backgroundColor: '#252525'}}>
                <Toolbar>
                    <IconButton style={{marginRight: '10px'}}>
                        <MenuIcon />
                    </IconButton>
                    <span>
                        <Link to='/'>
                            <strong><h1 style={{color: 'white', marginLeft: '10px'}}>📦Crate.</h1></strong>
                        </Link>
                    </span>
                    <span>
                        <Button style={{color: '#888888', marginLeft: '1900px', }}>
                            Learn More
                        </Button>
                    </span>
                    <span>
                        <Button style={{color: '#888888', marginLeft: '10px'}}>
                            Logout
                        </Button>
                    </span>
                    <span>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        style={{marginLeft: '10px'}}
                    >
                        <AccountCircle />
                    </IconButton>
                    </span>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar