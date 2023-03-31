import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/Bookmarks';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect( () => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    },[]);
    return (
        <div className="container grid grid-cols-12">
            <div className="col-span-12 sm:col-span-8">
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id}></Blog>)
                }
            </div>
            <div className="col-span-12 sm:col-span-4 ">
                <Bookmarks></Bookmarks>
            </div>
        </div>
    );
};

export default Main;