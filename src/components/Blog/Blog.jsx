import React from 'react';
import './Blog.css'

const Blog = (props) => {
    console.log(props.blog);
    const {author, authorImg, coverImg, title, hashTag, readingTime} = props.blog;
    return (
        <div className="blog">
            <div className="cover-container">
                <img src={coverImg} alt="" />
            </div>
            <div>
                <div className="author-container">
                    <div className="author-information">
                        <div className="authorImg">
                            <img src={authorImg} alt="" />
                        </div>
                        <div className="authorName">
                            <h4>{author}</h4>
                            <h6>Mar 27 (3 days ago)</h6>
                        </div>
                    </div>
                    <div>
                        <h5>{readingTime} min read <button>✈</button></h5>
                    </div>
                </div>
                <div>
                    <h1>{title}</h1>
                    <h5><span style={{marginRight:"5px"}}>{hashTag[0]}</span> <span>{hashTag[1]}</span></h5>
                    <a href="#">Mark as read</a>
                </div>
            </div>
            <hr className="hr" />
        </div>
    );
};

export default Blog;