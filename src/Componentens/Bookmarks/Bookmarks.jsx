import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    // console.log(bookmarks);
    return (
        <div className='md:w-1/3 bg-sky-50'>
            <h3 className='text-2xl font-semibold text-center'>Bookmarks Blogs: {bookmarks.length} </h3>
            {
                bookmarks.map((bookmark,idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.proptypes={
    bookmark:PropTypes.array 
}

export default Bookmarks;