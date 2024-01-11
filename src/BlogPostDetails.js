// BlogPostDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import blogPosts from './blogPosts';

function BlogPostDetails() {
  const { postId } = useParams();
  const post = blogPosts
    .flatMap(section => section.posts)
    .find(post => post.id === parseInt(postId));

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p> {/* Here is where we display the body content */}
      {/* Place here more details about your post */}
    </div>
  );
}

export default BlogPostDetails;
