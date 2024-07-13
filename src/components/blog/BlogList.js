// src/components/BlogList.js
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import blogPosts from '../../blogPosts.json';
/* eslint-enable no-unused-vars */
const BlogList = () => {
  /* eslint-enable no-unused-vars */
  const [, setPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setPosts(blogPosts);
    setDisplayedPosts(blogPosts.slice(0, visibleCount));
  }, [visibleCount]);

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term) {
      const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.category.toLowerCase().includes(term) ||
        (post.content && post.content.some(section => section.text && section.text.toLowerCase().includes(term)))
      );
      setDisplayedPosts(filteredPosts);
    } else {
      setDisplayedPosts(blogPosts.slice(0, visibleCount));
    }
  };

  return (
    <section className="blog-list px-3 py-5 p-md-5">
      <div className="header d-flex justify-content-between align-items-center">
        <h1>All Blog Posts</h1>
        <div className="search-wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            className="form-control search-input" 
            placeholder="Search posts..." 
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="blog-grid container single-col-max-width">
        {displayedPosts.map((post) => (
          <div key={post.id} className="blog-item mb-5">
            <div className="row g-3 g-xl-0">
              <div className="col-2 col-xl-3">
                <img className="img-fluid post-thumb" src={post.image} alt={post.title} />
              </div>
              <div className="col">
                <h3 className="title mb-1">
                  <Link className="text-link" to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <div className="meta mb-1">
                  <span className="date">{post.date}</span>
                  <span className="time">{post.readTime}</span>
                  <span className="comment">
                    <span className="text-link" href="#">{post.comments}</span>
                  </span>
                </div>
                <Link className="text-link" to={`/blog/${post.id}`}>Read more &rarr;</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < blogPosts.length && (
        <div className="text-center">
          <button className="btn btn-primary" onClick={handleShowMore}>Show More</button>
        </div>
      )}
      <Link to="/" className="back-button">Back to Home</Link>
    </section>
  );
};

export default BlogList;
