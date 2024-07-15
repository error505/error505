// src/components/BlogSection.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../../blogPosts.json'; // Adjust the path if needed

const BlogSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  return (
    <section className="blog-section" id="blog">
      <h2>My Blog Posts</h2>
      <div className="blog-grid">
        {posts.slice(0, 3).map((post) => (
          <div key={post.id} className="blog-item">
            <Link to={`/blog/${post.id}`}>
              <div className="blog-image" style={{ backgroundImage: `url(${post.image})` }}></div>
              <div className="card-content">
              <p><span className="category">{post.category}</span></p>
                <h4>{post.title}</h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="view-all">
        <Link to="/blog" className="back-button">View All Posts</Link>
      </div>
    </section>
  );
};

export default BlogSection;
