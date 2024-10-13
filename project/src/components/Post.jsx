/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../assets/styles/postStyle.css'
import '../assets/styles/buttonStyle.css'

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
        <button>👍 Like</button>
        <button>🔁 Share</button>
      </div>

      <p onClick={handleToggleComments} style={{ cursor: 'pointer', color: 'blue' }}>
        Comentarios ({comments.length})
      </p>

      {showComments && (
        <div className="comments-section">
          <h3>Comentarios</h3>
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
