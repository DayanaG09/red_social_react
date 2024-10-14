/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsThunk } from '../redux/postSlice';
import { fetchCommentsThunk } from '../redux/commentSlice';
import Post from './Post';

const PostContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const currentPage = useSelector((state) => state.posts.currentPage);
  const hasMore = useSelector((state) => state.posts.hasMore);
  const comments = useSelector((state) => state.comments.comments);

  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPostsThunk(1));
      dispatch(fetchCommentsThunk())
    }
  }, [postStatus, dispatch]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
      if (postStatus !== 'loading' && hasMore && !loadingMore) {
        setLoadingMore(true);
        dispatch(fetchPostsThunk(currentPage))
          .finally(() => setLoadingMore(false));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [postStatus, hasMore, currentPage, loadingMore, dispatch]);

  if (postStatus === 'loading' && posts.length === 0) {
    return <div>Loading...</div>;
  }

  if (postStatus === 'failed') {
    return <div>Failed to load data</div>;
  }

  return (
    <div>
      {posts.map((post) => {
          const postComments = comments.filter (comment => comment.postId === post.id ) ;
          return (
            <Post key={post.id} post={post} comments={postComments}/>
          );
  })}
      
      {loadingMore && <div>Loading more posts...</div>}
      {!hasMore && <div>No more posts to load</div>}
    </div>
    );
  };
 

export default PostContainer;