// BlogPost.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Post, PostTitle } from './StyledComponents';

function BlogPost({ id, title }) {
  return (
    <Link to={`/post/${id}`} style={{ textDecoration: 'none' }}>
      <Post>
        <PostTitle>{title}</PostTitle>
      </Post>
    </Link>
  );
}

export default BlogPost;
