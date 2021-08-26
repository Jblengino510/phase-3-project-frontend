import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"

function Login() {
    const [ oneUser, setOneUser ] = useState({})
    const [ formData, setFormData ] = useState({
        user_name: ""
    })
    const history = useHistory()

    useEffect(() => {
        fetch('http://localhost:9292/users/1')
        .then(res => res.json())
        .then(setOneUser)
    }, [])
    
    const userOne = oneUser.user_name
    console.log(userOne)
   

    function handleFormChange(e) {
        setFormData({...formData, 
        [e.target.name]: e.target.value
        })
    }

    function handleLoginSubmit() {
        if(formData.user_name === userOne)
            history.push('/profile')
    }


    return (
        <div className="signUpForm">
            <h1 style={{color: 'white'}}>Login with your Username</h1>
            <form onSubmit={handleLoginSubmit}>
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
                <Button 
                variant="contained"
                style={{backgroundColor: '#815A34', color: 'white'}}
                type="submit"
                >
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Login