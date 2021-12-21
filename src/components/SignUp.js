import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        color: 'white'
    },
    signUpForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        marginTop: '100px'
    },
    btn: {
        backgroundColor: '#815A34',
        padding: '25px',
        width: '30%',
        color: 'white' 
    }, 
    divider: {
        backgroundColor: '#252525',
        width: '5%',
        height: '3px',
        marginTop: '40px'
    },
    loginText: {
        '&:hover': {cursor: 'pointer', color: 'white'},
        color: '#815A34',
    }
})

function SignUp({ setAllUsers }) {
    const [ formData, setFormData ] = useState({
        user_name: ""
    })
    const history = useHistory()
    const classes= useStyles()

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
        <div className={classes.container}>
            <Typography variant='h3' style={{color: 'white', marginTop: '100px'}}>
                Create Your Free Crate. Account
            </Typography>
            <Divider className={classes.divider}/>
            <form onSubmit={handleSignUpSubmit} className={classes.signUpForm}>
                <TextField 
                id="standard-full-width"
                fullWidth
                label="Username" 
                variant="outlined"
                color="secondary"
                name="user_name"
                value={formData.user_name}
                onChange={handleFormChange}
                required
                />
                <br></br>
                <br></br>
                <Button type="submit" variant="contained" className={classes.btn}>
                    Sign Up
                </Button>
            </form>
            <Typography variant='body1' style={{marginTop: '20px'}}>
                <strong>Already have an account?</strong>
                &nbsp;
                <strong className={classes.loginText} onClick={() => history.push('/login')}>Login</strong>
            </Typography>
        </div>
    )
}

export default SignUp