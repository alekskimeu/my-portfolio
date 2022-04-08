import React from 'react';

import Post from '../Post/Post';
import styles from './Posts.module.css';

const Posts = ({ posts }) => {
  return (
    <div className={styles.blogPosts}>
      <div className="container">
        <div className="section-header">
          <h1 className="heading">Latest posts</h1>
        </div>
        <div className={styles.posts}>
          {posts.map(post => (
            <Post key={post.index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
