import PostList from './PostList';
import NavBar from './NavBar'
import Link from '@material-ui/core/Link'


function Profile({ posts, setLoggedInUser }) {

    return (
        <div className='profile'>
            <NavBar setLoggedInUser={setLoggedInUser}/>
            <PostList posts={posts}/>
        </div>
    )
}

export default Profile