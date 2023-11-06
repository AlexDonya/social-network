import React from 'react';
import style from './MyPosts.module.css'
import Preloader from '../../common/Preloader';

const MyPosts = ({ newPostText, posts, handlePostTextChange, handleAddPost, profile }) => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div className={style.textareaBtnBlock}>
                    <textarea value={newPostText} onChange={handlePostTextChange} />
                    <button className={style.btn} onClick={handleAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {posts.map(post => <div className={style.post} key={post.id}>
                    <div className={style.photoUserProfileContainer}>
                        {profile === null ? < Preloader /> :
                            <img className={style.photoUserProfile}
                                src={profile.photos.large}
                                alt="photo-user-profile" />}
                    </div>
                    <div className={style.postMessage}>
                        <span>{post.message}</span>
                    </div>
                    <div className={style.postLikes}>
                        <span>
                            <span className={style.heartSymbol}>❤️</span> {post.likes} likes
                        </span>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default MyPosts;