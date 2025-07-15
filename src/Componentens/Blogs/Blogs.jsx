import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark}) => {
    // console.log(handleAddToBookmark);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {/* <h1 className="text-4xl">Blogs: {blogs.length}</h1> */}
      {blogs.map((blog) => (
        <Blog handleAddToBookmark={handleAddToBookmark} key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};
Blogs.proptypes={
    handleAddToBookmark:PropTypes.func
}

export default Blogs;
