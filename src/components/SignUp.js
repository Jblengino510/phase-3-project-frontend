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
        color: 'white',
        backgroundColor: 'black'
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
        backgroundColor: '#3F3F3F',
        width: '5%',
        height: '3px',
        marginTop: '40px'
    },
    loginText: {
        '&:hover': {cursor: 'pointer', color: 'white'},
        color: '#815A34',
    }
})

function SignUp({ setLoggedInUser }) {
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

    function handleSignUpSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:9292/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            setLoggedInUser(data)
            localStorage.setItem('user', JSON.stringify(data))
            history.push("/profile")
        })
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
                variant="filled"
                color="secondary"
                name="user_name"
                value={formData.user_name}
                onChange={handleFormChange}
                style={{backgroundColor: 'white'}}
                required
                />
                <br />
                <br />
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