/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import commentIcon from '../assets/images/comentar.png';
import likeIcon from '../assets/images/corazon.png';      
import shareIcon from '../assets/images/compartir.png'; 
import '../assets/styles/style.css'

const Post = ({ post, comments }) => {
  const [showComments, setShowComments] = useState(false);

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <div className="post-icons">
        <button>
          <img src={likeIcon} alt="Like" className="icon" />Love
        </button>
        <button>
          <img src={shareIcon} alt="Share" className="icon" />Share
        </button>
      

      <button onClick={handleToggleComments} className="comment-button">
        <img src={commentIcon} alt="Comment" className="icon" />Comentarios ({comments.length})
      </button>
      </div>
      {showComments && (
        <div className="comments-section">
          <h3>Comentarios...</h3>
          {comments.map((comment) => (
            <div key={comment.id} className="comment">
              <p>
                <strong>{comment.name}:</strong> {comment.body}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Post;
