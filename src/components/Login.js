import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider';
import { useState, useEffect } from "react"
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
    loginForm: {
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
    signUpText: {
        '&:hover': {cursor: 'pointer', color: 'white'},
        color: '#815A34',
    }
})


function Login({ setLoggedInUser }) {
    const [ formData, setFormData ] = useState({
        user_name: ""
    })
    const history = useHistory()
    const classes = useStyles()
    

    function handleFormChange(e) {
        setFormData({...formData, 
        [e.target.name]: e.target.value
        })
    }

    function handleLoginSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:9292/users')
        .then(res => res.json())
        .then(data => {
            const localUser = data.filter(user => user.user_name === formData.user_name)
            if (data.map(user => user.user_name).includes(formData.user_name)) {
                setLoggedInUser(localUser[0])
                localStorage.setItem('user', JSON.stringify(localUser[0]))
                history.push("/profile")
            }
            else {
                window.alert('Username does not exist')
            }
        })
    }


    return (
        <div className={classes.container}>
            <Typography variant='h3' style={{color: 'white', marginTop: '100px'}}>
                Login with your Username
            </Typography>
            <Divider className={classes.divider}/>
            <form onSubmit={handleLoginSubmit} className={classes.loginForm}>
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
                <br />
                <br />
                <Button 
                className={classes.btn}
                variant="contained"
                type="submit"
                >
                    <strong>Login</strong>
                </Button>
            </form>
            <Typography variant='body1' style={{marginTop: '20px'}}>
                <strong>Don't have an account?</strong>
                &nbsp;
                <strong className={classes.signUpText} onClick={() => history.push('/signup')}>Sign Up</strong>
            </Typography>
        </div>
    )
}

export default Login