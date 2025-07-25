import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleMarkTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          handleMarkTime={handleMarkTime}
          handleAddToBookmark={handleAddToBookmark}
          key={blog.id}
          blog={blog}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.proptypes = {
  handleAddToBookmark: PropTypes.func,
  handleMarkTime: PropTypes.func,
};

export default Blogs;
