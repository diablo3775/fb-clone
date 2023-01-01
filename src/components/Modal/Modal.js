import React, { useEffect, useState } from 'react'
import './Modal.css'
import db from '../../firebase';
import { useStateValue } from '../../StateProvider';
import { Avatar } from '@material-ui/core';

const Modal = ({ closeModal, message, id, posts, setPosts, image }) => {
  const [newMessage, setNewMessage] = useState(message);
  const [newImage, setNewImage] = useState(image);
  const [{ user }, dispatch] = useStateValue();

  const updatePost = (newMessage, newImage) => {
    // Update the message in the databas
    db.collection("posts")
      .doc(id)
      .update({ message: newMessage, image: newImage });

    // Update the message in the state
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          return { ...post, message: newMessage, image: newImage };
        }
        return post;
      })
    );
  };

  useEffect(() => {
    setNewMessage(message);
    setNewImage(image);
  }, [message, image]);

    return (
        <div>
            <div className="modalContainer">
                <div className="titleCloseBtn"></div>
                <div className="title">
                    <div className="messageSender">
                        <div className="messageSender__top">
                            <Avatar src={user.photoURL} />
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    updatePost(newMessage, newImage);
                                }}
                            >
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    className="messageSender__input"
                                    placeholder={`What's on your mind, ${user.displayName}?`}
                                />
                                <input
                                    value={newImage}
                                    onChange={(e) => setNewImage(e.target.value)}
                                    placeholder="image URL (Optional)"
                                />
                                <button type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="body"></div>
                <div className="footer">
                    <button onClick={() => closeModal(false)} id="cancelBtn">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal