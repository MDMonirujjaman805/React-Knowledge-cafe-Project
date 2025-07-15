import React from "react";
import PropTypes from "prop-types";
import { BsBookmarkPlusFill } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmark, handleMarkTime }) => {
  const {
    title,
    cover_img,
    author_name,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="full pb-6"
        src={cover_img}
        alt={`cover image of the ${cover_img}`}
      />
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <img
            className="rounded-full w-14"
            src={author_img}
            alt="author image"
          />
          <div>
            <p>{author_name}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span>{reading_time} min read</span>
          <button
            className="cursor-pointer"
            onClick={() => handleAddToBookmark(blog)}
          >
            {" "}
            <BsBookmarkPlusFill></BsBookmarkPlusFill>
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold py-5 text-[#111111]">
        {" "}
        Title: {title}
      </h2>
      <p className="text-xl font-light cursor-pointer">{hashtags}</p>
      <button
        className="cursor-pointer underline mt-5 text-purple-700 font-bold"
        onClick={() => handleMarkTime(reading_time)}
      >
        Mark As Read
      </button>
    </div>
  );
};
Blog.proptypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkTime: PropTypes.func,
};
export default Blog;
