import PostList from './PostList';
import NavBar from './NavBar'
import Link from '@material-ui/core/Link'


function Profile({ posts }) {
    return (
        <>
            <NavBar />
            <div className="profile">
                <PostList posts={posts}/>
            </div>
        </>
    )
}

export default Profile