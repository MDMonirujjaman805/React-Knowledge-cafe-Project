import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};
Blog.proptype = {
    blog:PropTypes.object.isRequired
}
export default Blog;