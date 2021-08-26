import PostList from './PostList';
import NavBar from './NavBar'
import Container from '@material-ui/core/Container';
function Profile({ posts }) {
    return (
            <div>
                <NavBar />
                <PostList posts={posts}/>
            </div>
    )
}

export default Profile