import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readTime}) => {
    // console.log(bookmarks);
    return (
     
        <div className='md:w-1/3 bg-sky-50'>
            <div className=' py-3 px-5 my-3  rounded-2xl bg-gray-200 text-center'>
                <h2 className='text-2xl'>Spent Time on Read: {readTime}</h2>
            </div>
            <h3 className='text-2xl font-semibold text-center'>Bookmarks Blogs: {bookmarks.length} </h3>
            {
                bookmarks.map((bookmark,idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.proptypes={
    bookmark:PropTypes.array,
    readTime:PropTypes.number
}

export default Bookmarks;