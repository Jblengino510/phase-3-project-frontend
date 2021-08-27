import PostList from './PostList';



function Profile({ posts }) {
    return (
            <div className="profile" style={{backGroundColor: '#333'}}>
                <PostList posts={posts}/>
            </div>
    )
}

export default Profile