import React, { useState } from 'react';
import Post from './Post';

const Comments = ({ post }) => {
  const [comments] = useState([
    { id: 1, name: "Usuario 1", body: "comentario 1 ." },
    { id: 2, name: "Usuario 2", body: "comentario 2 ." }
  ]);

  return (
    <div>
      <Post post={post} comments={comments} />
    </div>
  );
};

export default Comments;

