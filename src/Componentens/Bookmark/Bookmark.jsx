import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-sky-100 p-4 m-4 rounded-xl">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
};
Bookmark.proptypes = {
  bookmark: PropTypes.object,
};
export default Bookmark;
