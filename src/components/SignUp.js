import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from "react"
import { useHistory } from "react-router-dom"

function SignUp() {
    const [ formData, setFormData ] = useState({
        user_name: ""
    })

    return (
        <div className="signUpForm">
            <h1 style={{color: 'white'}}>Create Your Free Crate. Account</h1>
            <form>
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Username" 
                variant="outlined"
                color="secondary"
                name="username"
                value={formData.user_name}
                />
                <br></br>
                <br></br>
                <Button variant="contained" style={{backgroundColor: '#815A34', color: 'white'}}>
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default SignUp