import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    console.log(props.blog);
    const {author, authorImg, coverImg, title, hashTag, readingTime} = props.blog;
    return (
        <div className="mt-9">
            <div className="w-full rounded overflow-hidden h-56 sm:h-larg" >
                <img className="w-full h-full" src={coverImg} alt="" />
            </div>
            <div>
                <div className="flex justify-between items-center my-4">
                    <div className="flex gap-3">
                        <div className="w-14 h-14 overflow-hidden rounded-full">
                            <img className="w-full" src={authorImg} alt="" />
                        </div>
                        <div className="">
                            <h3 className="text-lg sm:text-2xl font-semibold">{author}</h3>
                            <h5 className="text-sm sm:text-base text-gray-600">Mar 27 (3 days ago)</h5>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-sm sm:text-base text-gray-600">{readingTime} min read <button><FontAwesomeIcon icon={faBookmark} /></button></h5>
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl  sm:text-4xl font-semibold my-4">{title}</h1>
                    <h5 className=" text-gray-600"><span className="mr-2">{hashTag[0]}</span> <span>{hashTag[1]}</span></h5>
                    <button className="mt-2" style={{color:"#646cff", textDecoration:"underline"}}>Mark as read</button>
                </div>
            </div>
            <hr className="my-3" />
        </div>
    );
};

export default Blog;