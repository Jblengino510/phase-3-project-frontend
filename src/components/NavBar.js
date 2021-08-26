import Button from '@material-ui/core/Button';

function NavBar() {
    return (
        <div className="navBar">
            <span>
                <strong><h1 style={{color: 'white'}}>📦Crate.</h1></strong>
            </span>
            <span>
                <Button style={{color: '#888888'}}>
                    Learn More
                </Button>
                <Button style={{color: '#888888'}}>
                    Login
                </Button>
                <Button href="/signup" variant="contained" style={{backgroundColor: '#815A34', color: 'white'}}>
                    Sign Up
                </Button>
             </span>
        </div>
    )
}

export default NavBar