import React from 'react';

const Bookmarks = (props) => {
    return (
        <div>
            <h3 className="text-xl font-semibold mt-5 rounded-lg bg-white p-4">{props.blog.title}</h3>
        </div>
    );
};

export default Bookmarks;