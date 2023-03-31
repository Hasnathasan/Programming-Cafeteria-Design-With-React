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
    const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
    const addToBookmark = (id) => {
        const blog = blogs.find(blog => blog.id === id);
        setBookmarkedBlogs([...bookmarkedBlogs, blog]);
    }
    
    
        let readingTime;
    const [timeBlogs, setTimeBlogs] = useState([])
    const addReadingTime = (id) =>{
        const blog = blogs.find(blog => blog.id === id);
        setTimeBlogs([...timeBlogs, blog]);
    }
    let time = 0;
    for(const blog of timeBlogs){
        const newTime = blog.readingTime;
        time = time + newTime;
    }
    
    return (
        <div className="container grid grid-cols-12">
            <div className="col-span-12 sm:col-span-8">
                {
                    blogs.map(blog => <Blog blog={blog} addToBookmark={addToBookmark} addReadingTime={addReadingTime} key={blog.id}></Blog>)
                }
            </div>
            <div className="col-span-12 sm:col-span-4 ">
                <div className="ml-0 sm:ml-5">
                    <div className="my-10 h-20 flex items-center justify-center border border-fancy rounded-lg font-bold bg-purple-100">
                        <h3 className="text-fancy text-2xl">Spent time on read : {time} min</h3>
                    </div>
                    <div className="p-7 rounded-lg" style={{background: "rgba(17, 17, 17, 0.05)"}}>
                        <h3 className="text-2xl font-semibold">Bookmarked Blogs : {bookmarkedBlogs.length}</h3>
                        {
                            bookmarkedBlogs.map(blog => <Bookmarks blog={blog} key={blog.id}></Bookmarks>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;