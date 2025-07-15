import React from 'react';
import PropTypes from 'prop-types';
import { BsBookmarkPlusFill } from 'react-icons/bs';


const Blog = ({blog,handleAddToBookmark}) => {
    // console.log(blog);
    const {title,cover_img,author_name,author_img,posted_date,reading_time,hashtags}=blog;
    // author_title,
    return (
        <div className='mb-20'>
            <img className='full pb-6' src={cover_img} alt={`cover image of the ${cover_img}`} />
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center' >
                    <img className='rounded-full w-14' src={author_img} alt="author image" />
                    <div>
                        <p>{author_name}</p>
                        {/* <span><small>{author_title}</small></span> */}
                        <p>{posted_date }</p>
                      

                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time}</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='cursor-pointer '> <BsBookmarkPlusFill></BsBookmarkPlusFill></button>
                      
                </div>
            </div>
            <h2 className='text-4xl font-bold py-5 text-[#111111]'> Title: {title}</h2>
            <p className='text-xl font-light cursor-pointer'>{hashtags}</p>
        </div>
    );
};
Blog.proptypes= {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
}
export default Blog;