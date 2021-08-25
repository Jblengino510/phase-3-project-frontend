import Button from '@material-ui/core/Button';

function LandingPage() {
    return (
        <div clasName="landingPageBackground">
            <div className="landingPage">
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
                    <Button variant="contained" style={{backgroundColor: '#815A34', color: 'white'}}>
                        Sign Up
                    </Button>
                </span>
            </div>
        </div>
    )
}

export default LandingPage