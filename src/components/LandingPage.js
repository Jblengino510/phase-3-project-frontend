import Button from '@material-ui/core/Button';

function LandingPage() {
    return (
            <div className="landingPage">
                <span>
                    <strong><h1 style={{color: 'white', marginRight: '1000px', marginLeft: '20px', fontSize: '42px'}}>📦Crate.</h1></strong>
                </span>
                <span>
                    <Button style={{color: '#888888', marginLeft: '800px'}}>
                        Learn More
                    </Button>
                    <Button href="/login" style={{color: '#888888',marginLeft: '20px', marginLeft: '20px'}}>
                        Login
                    </Button>
                    <Button href="/signup" variant="contained" style={{backgroundColor: '#815A34', color: 'white', marginLeft: '20px'}}>
                        Sign Up
                    </Button>
                </span>
            </div>
    )
}

export default LandingPage