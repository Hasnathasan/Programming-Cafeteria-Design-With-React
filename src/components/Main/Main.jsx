import React, { useEffect, useState } from 'react';
import './Main.css'
import Blog from '../Blog/Blog';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    },[]);
    return (
        <div className="main-section">
            <div className="blogs">
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
                }
            </div>
            <div className="bookmarks">
                <h1>Books</h1>
            </div>
        </div>
    );
};

export default Main;