import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import {  ExpandMoreOutlined } from '@material-ui/icons';
import db from '../../firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Modal from '../Modal/Modal'

function Post({ profilePic, image, username, timestamp, message, id, setPosts, posts }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(true);
    };

    const deletePost = () => {
        db.collection('posts').doc(id).delete();
        setPosts(posts.filter(post => post.id !== id));
    }

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <h3>{username}</h3>
                <p className='post__top__date'>{new Date(timestamp?.toDate()).toUTCString()}</p>

                <div className="dropdown__container end" style={{ justifyContent: "flex-end" }}>
                    <MoreHorizIcon />
                    <div className="dropdown-menu">
                        <div className='edit__button' onClick={toggleModal}><EditIcon /><div className='edit__name'>Edit Post</div></div>
                        {
                            modal && <Modal closeModal={setModal} message={message} id={id} posts={posts} setPosts={setPosts} image={image} />
                        }
                        <div className='delete__button' onClick={() => deletePost(id)}><DeleteIcon />Delete Post</div>
                    </div>
                </div>

            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
