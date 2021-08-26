import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from "react"
import { useHistory } from "react-router-dom"

function SignUp({ setAllUsers }) {
    const [ formData, setFormData ] = useState({
        user_name: ""
    })

    const history = useHistory()

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSignUpSubmit() {
        fetch('http://localhost:9292/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(setAllUsers)
        history.push("/profile")
    }

    return (
        <div className="signUpForm">
            <h1 style={{color: 'white'}}>Create Your Free Crate. Account</h1>
            <form onSubmit={handleSignUpSubmit}>
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Username" 
                variant="outlined"
                color="secondary"
                name="user_name"
                value={formData.user_name}
                onChange={handleFormChange}
                />
                <br></br>
                <br></br>
                <Button type="submit" variant="contained" style={{backgroundColor: '#815A34', color: 'white'}}>
                    Sign Up
                </Button>
            </form>
        </div>
    )
}

export default SignUp