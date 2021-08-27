import PostList from './PostList';
import NavBar from './NavBar'



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